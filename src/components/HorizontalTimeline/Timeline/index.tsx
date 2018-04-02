import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';
import { min, reduce } from 'lodash';

import Event from '../Event';
import { EventData } from 'src/models/events';
import FillingBar from '../FillingBar';
import { TimelineStyles } from './styles';

interface EventPosition extends EventData {
  position: number;
}

interface TimelineProps {
  events: EventData[];
  translateXType: TimelineTranslateXType;
  minEventDistance: number;
}

interface TimelineState {
  translateXLength: number;
  wrapperWidth: number;
  events: EventPosition[];
}

class Timeline extends React.Component<TimelineProps & WithStyles<TimelineStyles>, TimelineState> {
  constructor(props: TimelineProps & WithStyles<TimelineStyles>) {
    super(props);

    const { events, minEventDistance } = props;
    const minEventDiffDays = this.calculateMinEventDiffDays(events);
    const boundaryDistance = 60;
    const data = this.getEventsWithPosition(events, minEventDiffDays, minEventDistance, boundaryDistance);
    const wrapperWidth = this.calculateWrapperWidth(data, boundaryDistance);

    this.state = { translateXLength: 0, wrapperWidth, events: data };
    this.resize = this.resize.bind(this);
  }

  private container: HTMLDivElement;

  private calculateInferiorBoundary() {
    const containerWidth = this.container.offsetWidth;
    const { wrapperWidth } = this.state;
    const inferiorBoundary = -(wrapperWidth - containerWidth);

    return inferiorBoundary;
  }

  private calculateTranslateXLength(type: TimelineTranslateXType) {
    if (type === 'left') {
      const translateXLength = this.state.translateXLength + this.container.offsetWidth;

      return translateXLength > 0 ? 0 : translateXLength;
    } else {
      const translateXLength = this.state.translateXLength - this.container.offsetWidth;
      const inferiorBoundary = this.calculateInferiorBoundary();

      return translateXLength < inferiorBoundary ? inferiorBoundary : translateXLength;
    }
  }

  private calculateXPosition(diffDays: number, minDiffDays: number, minDistance: number, previousDistance: number) {
    return minDistance * diffDays / minDiffDays + previousDistance;
  }

  private calculateWrapperWidth(events: EventPosition[], boundaryDistance: number) {
    return events[events.length - 1].position + boundaryDistance;
  }

  private calculateMinEventDiffDays(events: EventData[]) {
    const minEventDiffDays = min(
      reduce<EventData, number[]>(
        events,
        (acc, elem, key) => {
          if (key < events.length - 1) {
            const diffDays = events[key + 1].date.diff(elem.date, 'days');

            acc.push(diffDays);
          }

          return acc;
        },
        []
      )
    );

    return minEventDiffDays ? minEventDiffDays : 0;
  }

  private getEventsWithPosition(
    events: EventData[],
    minEventDiffDays: number,
    minEventDistance: number,
    boundaryDistance: number
  ) {
    return reduce<EventData, EventPosition[]>(
      events,
      (acc, event, key) => {
        if (key === 0) {
          acc.push({ ...event, position: boundaryDistance });
        } else {
          const diffDays = event.date.diff(events[key - 1].date, 'days');
          const position = this.calculateXPosition(diffDays, minEventDiffDays, minEventDistance, acc[key - 1].position);

          acc.push({ ...event, position });
        }

        return acc;
      },
      []
    );
  }

  private resize() {
    const inferiorBoundary = this.calculateInferiorBoundary();
    const { translateXLength } = this.state;

    if (inferiorBoundary > translateXLength) {
      this.setState({ translateXLength: inferiorBoundary });
    }
  }

  componentWillMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  componentWillReceiveProps(nextProps: TimelineProps & WithStyles<TimelineStyles>) {
    const { translateXType } = nextProps;
    const translateXLength = this.calculateTranslateXLength(translateXType);

    this.setState({ translateXLength });
  }

  render() {
    const { classes } = this.props;
    const { events, wrapperWidth } = this.state;

    return (
      <div
        className={classes.container}
        ref={(node) => {
          if (node) {
            this.container = node;
          }
        }}>
        <div
          className={classes.wrapper}
          style={{ width: wrapperWidth, transform: `translateX(${this.state.translateXLength}px)` }}>
          {events.map((event, key) => <Event date={event.date} position={event.position} key={key} />)}
          <FillingBar value={20} />
        </div>
      </div>
    );
  }
}

export type TimelineTranslateXType = 'left' | 'right';

export default withStyles(TimelineStyles)(Timeline);
