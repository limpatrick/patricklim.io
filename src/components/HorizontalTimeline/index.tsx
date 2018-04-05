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

interface HorizontalTimelineProps {
  velocityComplete: (callback: () => void) => Promise<void>;
}

interface HorizontalTimelineState {
  events: EventPosition[];
  inferiorBoundary: number;
  translateX: number;
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

    const { velocityComplete } = this.props;
    const minEventDiffDays = calculateMinEventDiffDays(data);
    const events = getEventsWithPosition(
      data,
      HorizontalTimeline.EDGE_DISTANCE,
      minEventDiffDays,
      HorizontalTimeline.MIN_EVENT_DISTANCE
    );
    const wrapperWidth = calculateWrapperWidth(events, HorizontalTimeline.EDGE_DISTANCE);
    const inferiorBoundary = wrapperWidth;

    this.state = { translateX: 0, events, wrapperWidth, inferiorBoundary };
    this.resize = this.resize.bind(this);

    velocityComplete(() => {
      this.resize();
    });
  }

  private timeline: HTMLDivElement;

  private handleNavigation(type: NavigationType) {
    this.setState(({ translateX, wrapperWidth }) => ({
      translateX:
        type === 'previous'
          ? calculateLeftTranslateX(this.timeline.clientWidth, translateX)
          : calculateRightTranslateX(this.timeline.clientWidth, translateX, wrapperWidth),
    }));
  }

  private resize() {
    this.setState(({ translateX, wrapperWidth }) => {
      const inferiorBoundary = calculateInferiorBoundary(this.timeline.clientWidth, wrapperWidth);

      return { translateX: inferiorBoundary > translateX ? inferiorBoundary : translateX, inferiorBoundary };
    });
  }

  componentWillMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  render() {
    const { classes } = this.props;
    const { translateX, events, wrapperWidth, inferiorBoundary } = this.state;

    return (
      <div
        className={classes.container}
        ref={(node) => {
          if (node) {
            this.timeline = node.children.item(1) as HTMLDivElement;
          }
        }}>
        <Navigation type="previous" onClick={(type) => this.handleNavigation(type)} disabled={translateX === 0} />
        <Timeline events={events} translateX={translateX} wrapperWidth={wrapperWidth} />
        <Navigation
          type="next"
          onClick={(type) => this.handleNavigation(type)}
          disabled={translateX === inferiorBoundary}
        />
      </div>
    );
  }
}

export default withStyles(HorizontalTimelineStyles)(HorizontalTimeline);
