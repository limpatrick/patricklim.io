import * as React from 'react';

import { Event, EventPosition, YearLabel } from './typings';
import Navigation, { NavigationType } from './Navigation';
import { WithStyles, withStyles } from 'material-ui/styles';
import {
  calculateInferiorBoundary,
  calculateLeftTranslateX,
  calculateRightTranslateX,
  calculateWrapperWidth,
  getEventsWithPosition,
  getEventsYearLabel,
} from './positioning';
import withVelocityOnComplete, {
  WithVelocityOnCompleteInjectedProps,
  handler,
} from 'components/containers/velocity/withVelocityOnComplete';

import { HorizontalTimelineStyles } from './styles';
import { StoreState } from 'src/redux';
import Timeline from './Timeline';
import { connect } from 'react-redux';
import { fetchEvents } from 'src/redux/events/actions';
import { findEventIndex } from 'src/redux/events/reducers';
import { isEqual } from 'lodash';
import { selectEvent } from 'src/redux/tags/actions';

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
}

class HorizontalTimeline extends React.Component<
  HorizontalTimelineStateToProps &
    HorizontalTimelineDispatchToProps &
    WithStyles<HorizontalTimelineStyles> &
    WithVelocityOnCompleteInjectedProps,
  HorizontalTimelineState
> {
  private static readonly EDGE_DISTANCE = 200;
  private static readonly MIN_EVENT_DISTANCE = 200;

  constructor(
    props: HorizontalTimelineStateToProps &
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
    const events = getEventsWithPosition(data, HorizontalTimeline.EDGE_DISTANCE, HorizontalTimeline.MIN_EVENT_DISTANCE);
    const yearLabels = getEventsYearLabel(events, HorizontalTimeline.MIN_EVENT_DISTANCE);
    const wrapperWidth = calculateWrapperWidth(events, HorizontalTimeline.EDGE_DISTANCE);
    const inferiorBoundary = wrapperWidth;

    return { events, inferiorBoundary, translateX: 0, wrapperWidth, yearLabels };
  }

  private resize = () => {
    this.setState(({ translateX, wrapperWidth }) => {
      const inferiorBoundary = calculateInferiorBoundary(this.timeline.clientWidth, wrapperWidth);

      return { translateX: inferiorBoundary > translateX ? inferiorBoundary : translateX, inferiorBoundary };
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
  }: HorizontalTimelineStateToProps &
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
    const { classes, onEventClick, index } = this.props;
    const { translateX, events, wrapperWidth, inferiorBoundary, yearLabels } = this.state;

    return (
      <div className={classes.container} ref={this.ref}>
        <Navigation type="previous" onClick={this.handleNavigation} disabled={translateX === 0} />
        <Timeline
          events={events}
          index={index}
          onEventClick={onEventClick}
          translateX={translateX}
          wrapperWidth={wrapperWidth}
          yearLabels={yearLabels}
        />
        <Navigation type="next" onClick={this.handleNavigation} disabled={translateX === inferiorBoundary} />
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): HorizontalTimelineStateToProps => {
  const index = findEventIndex(state.events, state.tags.id);

  return {
    data: state.events,
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
