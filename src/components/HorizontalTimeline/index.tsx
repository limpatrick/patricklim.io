import * as React from 'react';

import { EventPosition, YearLabel } from './typings';
import Navigation, { NavigationType } from './Navigation';
import { WithStyles, withStyles } from 'material-ui/styles';
import {
  calculateInferiorBoundary,
  calculateLeftTranslateX,
  calculateRightTranslateX,
  calculateWrapperWidth,
  getEventsWithPosition,
  getEventsWithPredefinedPosition,
  getEventsYearLabel,
} from './positioning';
import { fetchEvents, selectEvent } from 'src/redux/events/actions';
import withVelocityOnComplete, {
  WithVelocityOnCompleteInjectedProps,
  handler,
} from 'components/containers/velocity/withVelocityOnComplete';

import { Event } from 'src/api/typings';
import { HorizontalTimelineStyles } from './styles';
import { StoreState } from 'src/redux';
import Timeline from './Timeline';
import { connect } from 'react-redux';
import eventsSelectors from 'src/redux/events/selectors';
import { isEqual } from 'lodash';

interface HorizontalTimelineProps {
  predefinedEventDistance?: number;
}

interface HorizontalTimelineStateToProps {
  data: Event[];
  index: number;
}

interface HorizontalTimelineDispatchToProps {
  onEventClick: (id: string) => void;
  fetchData: () => void;
}

interface HorizontalTimelineState {
  events: EventPosition[];
  inferiorBoundary: number;
  translateX: number;
  wrapperWidth: number;
  yearLabels: YearLabel[];
  timelineWidth: number;
}

class HorizontalTimeline extends React.Component<
  HorizontalTimelineProps &
    HorizontalTimelineStateToProps &
    HorizontalTimelineDispatchToProps &
    WithStyles<HorizontalTimelineStyles> &
    WithVelocityOnCompleteInjectedProps,
  HorizontalTimelineState
> {
  private static readonly EDGE_DISTANCE = 200;
  private static readonly MIN_EVENT_DISTANCE = 50;

  constructor(
    props: HorizontalTimelineProps &
      HorizontalTimelineStateToProps &
      HorizontalTimelineDispatchToProps &
      WithStyles<HorizontalTimelineStyles> &
      WithVelocityOnCompleteInjectedProps
  ) {
    super(props);

    const { data } = this.props;
    const { fetchData, onVelocityComplete } = this.props;

    if (data.length === 0) {
      fetchData();
    }

    this.resize = this.resize.bind(this);
    this.state = this.getState(data);

    onVelocityComplete(this.resize);
  }

  private timeline: HTMLDivElement;

  private getState = (data: Event[]): HorizontalTimelineState => {
    const { predefinedEventDistance } = this.props;
    const events = predefinedEventDistance
      ? getEventsWithPredefinedPosition(data, predefinedEventDistance)
      : getEventsWithPosition(data, HorizontalTimeline.EDGE_DISTANCE, HorizontalTimeline.MIN_EVENT_DISTANCE);
    const yearLabels = predefinedEventDistance ? [] : getEventsYearLabel(events, HorizontalTimeline.MIN_EVENT_DISTANCE);
    const wrapperWidth = calculateWrapperWidth(events, HorizontalTimeline.EDGE_DISTANCE);
    const inferiorBoundary = wrapperWidth;
    const timelineWidth = 0;

    return { events, inferiorBoundary, translateX: 0, wrapperWidth, yearLabels, timelineWidth };
  }

  private resize = () => {
    this.setState(({ translateX, wrapperWidth, events, timelineWidth }) => {
      const newTimelineWidth = this.timeline ? this.timeline.clientWidth : timelineWidth;
      const inferiorBoundary = calculateInferiorBoundary(newTimelineWidth, wrapperWidth);

      return {
        translateX: translateX > 0 && inferiorBoundary > translateX ? inferiorBoundary : translateX,
        inferiorBoundary,
        timelineWidth: newTimelineWidth,
      };
    });
  }

  ref = (node: HTMLDivElement | null) => {
    if (node) {
      this.timeline = node.children.item(1) as HTMLDivElement;
    }
  }

  handleNavigation = (type: NavigationType) => {
    this.setState(({ translateX, wrapperWidth }) => ({
      translateX:
        type === 'previous'
          ? calculateLeftTranslateX(this.timeline.clientWidth, translateX)
          : calculateRightTranslateX(this.timeline.clientWidth, translateX, wrapperWidth),
    }));
  }

  componentWillMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
    handler.removeCallback(this.resize);
  }

  componentWillReceiveProps({
    data,
    index,
  }: HorizontalTimelineProps &
    HorizontalTimelineStateToProps &
    HorizontalTimelineDispatchToProps &
    WithStyles<HorizontalTimelineStyles> &
    WithVelocityOnCompleteInjectedProps) {
    if (!isEqual(data, this.props.data)) {
      const { onEventClick } = this.props;

      this.setState(this.getState(data));
      onEventClick(data[index].id);
    }
  }

  render() {
    const { classes, onEventClick, index, predefinedEventDistance } = this.props;
    const { translateX, events, wrapperWidth, inferiorBoundary, yearLabels, timelineWidth } = this.state;

    return (
      <div className={classes.container} ref={this.ref}>
        <Navigation type="previous" onClick={this.handleNavigation} disabled={translateX === 0} />
        <Timeline
          events={events}
          format={predefinedEventDistance ? 'MM/YYYY' : 'MMM'}
          index={index}
          onEventClick={onEventClick}
          translateX={translateX}
          wrapperWidth={wrapperWidth}
          yearLabels={yearLabels}
        />
        <Navigation
          type="next"
          onClick={this.handleNavigation}
          disabled={translateX <= inferiorBoundary || timelineWidth === 0 || wrapperWidth < timelineWidth}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): HorizontalTimelineStateToProps => {
  const index = eventsSelectors.getSelectedEventIndex(state.events);

  return {
    data: state.events.list,
    index: index > 0 ? index : 0,
  };
};

const mapDispatchToProps: HorizontalTimelineDispatchToProps = {
  onEventClick: selectEvent,
  fetchData: fetchEvents,
};

export default connect<HorizontalTimelineStateToProps, HorizontalTimelineDispatchToProps>(
  mapStateToProps,
  mapDispatchToProps
)(withVelocityOnComplete(withStyles(HorizontalTimelineStyles)(HorizontalTimeline)));
