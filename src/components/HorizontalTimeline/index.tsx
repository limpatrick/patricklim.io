import * as React from 'react';

import Navigation, { NavigationType } from './Navigation';
import Timeline, { EventPosition, YearLabel } from './Timeline';
import { WithStyles, withStyles } from 'material-ui/styles';
import {
  calculateInferiorBoundary,
  calculateLeftTranslateX,
  calculateRightTranslateX,
  calculateWrapperWidth,
  getEventsWithPosition,
  getEventsYearLabel,
} from './positioning';

import { HorizontalTimelineStyles } from './styles';
import { events as data } from 'src/models/events';

interface HorizontalTimelineProps {
  onVelocityComplete: (callback: () => void) => Promise<void>;
}

interface HorizontalTimelineState {
  events: EventPosition[];
  inferiorBoundary: number;
  translateX: number;
  wrapperWidth: number;
  yearLabels: YearLabel[];
}

class HorizontalTimeline extends React.Component<
  HorizontalTimelineProps & WithStyles<HorizontalTimelineStyles>,
  HorizontalTimelineState
> {
  private static readonly EDGE_DISTANCE = 200;
  private static readonly MIN_EVENT_DISTANCE = 200;

  constructor(props: HorizontalTimelineProps & WithStyles<HorizontalTimelineStyles>) {
    super(props);

    const { onVelocityComplete } = this.props;
    const events = getEventsWithPosition(data, HorizontalTimeline.EDGE_DISTANCE, HorizontalTimeline.MIN_EVENT_DISTANCE);
    const yearLabels = getEventsYearLabel(events, HorizontalTimeline.MIN_EVENT_DISTANCE);
    const wrapperWidth = calculateWrapperWidth(events, HorizontalTimeline.EDGE_DISTANCE);
    const inferiorBoundary = wrapperWidth;

    this.state = { translateX: 0, events, wrapperWidth, inferiorBoundary, yearLabels };
    this.resize = this.resize.bind(this);

    onVelocityComplete(() => {
      this.resize();
    });
  }

  private timeline: HTMLDivElement;

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
  }

  render() {
    const { classes } = this.props;
    const { translateX, events, wrapperWidth, inferiorBoundary, yearLabels } = this.state;

    return (
      <div className={classes.container} ref={this.ref}>
        <Navigation type="previous" onClick={this.handleNavigation} disabled={translateX === 0} />
        <Timeline events={events} translateX={translateX} wrapperWidth={wrapperWidth} yearLabels={yearLabels} />
        <Navigation type="next" onClick={this.handleNavigation} disabled={translateX === inferiorBoundary} />
      </div>
    );
  }
}

export default withStyles(HorizontalTimelineStyles)(HorizontalTimeline);
