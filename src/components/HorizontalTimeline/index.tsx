import * as React from 'react';

import Navigation, { NavigationType } from './Navigation';
import Timeline, { EventPosition } from './Timeline';
import { WithStyles, withStyles } from 'material-ui/styles';
import {
  calculateInferiorBoundary,
  calculateLeftTranslateX,
  calculateMinEventDiffDays,
  calculateRightTranslateX,
  calculateWrapperWidth,
  getEventsWithPosition,
} from './positioning';

import { HorizontalTimelineStyles } from './styles';
import { events as data } from 'src/models/events';

interface HorizontalTimelineProps {}

interface HorizontalTimelineState {
  translateX: number;
  events: EventPosition[];
  wrapperWidth: number;
}

class HorizontalTimeline extends React.Component<
  HorizontalTimelineProps & WithStyles<HorizontalTimelineStyles>,
  HorizontalTimelineState
> {
  private static readonly EDGE_DISTANCE = 200;
  private static readonly MIN_EVENT_DISTANCE = 200;

  constructor(props: HorizontalTimelineProps & WithStyles<HorizontalTimelineStyles>) {
    super(props);

    const minEventDiffDays = calculateMinEventDiffDays(data);
    const events = getEventsWithPosition(
      data,
      HorizontalTimeline.EDGE_DISTANCE,
      minEventDiffDays,
      HorizontalTimeline.MIN_EVENT_DISTANCE
    );
    const wrapperWidth = calculateWrapperWidth(events, HorizontalTimeline.EDGE_DISTANCE);

    this.state = { translateX: 0, events, wrapperWidth };
    this.resize = this.resize.bind(this);
  }

  private timeline: HTMLDivElement;
  private timelineWrapper: HTMLDivElement;

  private handleNavigation(type: NavigationType) {
    const previousTranslateX = this.state.translateX;
    const translateX =
      type === 'previous'
        ? calculateLeftTranslateX(this.timeline.offsetWidth, previousTranslateX)
        : calculateRightTranslateX(this.timeline.offsetWidth, previousTranslateX, this.timelineWrapper.offsetWidth);

    this.setState({ translateX });
  }

  private resize() {
    const { translateX, wrapperWidth } = this.state;
    const inferiorBoundary = calculateInferiorBoundary(wrapperWidth, this.timeline.offsetWidth);

    if (inferiorBoundary > translateX) {
      this.setState({ translateX: inferiorBoundary });
    }
  }

  componentWillMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  render() {
    const { classes } = this.props;
    const { translateX, events, wrapperWidth } = this.state;

    return (
      <div
        className={classes.container}
        ref={(node) => {
          if (node) {
            this.timeline = node.children.item(1) as HTMLDivElement;
            this.timelineWrapper = this.timeline.firstElementChild as HTMLDivElement;
          }
        }}>
        <Navigation type="previous" onClick={(type) => this.handleNavigation(type)} />
        <Timeline events={events} translateX={translateX} wrapperWidth={wrapperWidth} />
        <Navigation type="next" onClick={(type) => this.handleNavigation(type)} />
      </div>
    );
  }
}

export default withStyles(HorizontalTimelineStyles)(HorizontalTimeline);
