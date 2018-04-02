import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';

import Event from '../Event';
import { EventData } from 'src/models/events';
import FillingBar from '../FillingBar';
import { Moment } from 'moment';
import { TimelineStyles } from './styles';
import { reduce } from 'lodash';

const getXPosition = (firstEvent: Moment, event: Moment) => {
  const minimumSpace = 10;
  const diffDays = event.diff(firstEvent, 'days');

  if (diffDays < 0) {
    throw new Error('Events must be arranged in ascending order');
  }

  return minimumSpace + minimumSpace * diffDays;
};

const getEventsWithPosition = (events: EventData[]) =>
  reduce<EventData, EventPosition[]>(
    events,
    (acc, elem, key) => {
      const position = getXPosition(events[0].date, elem.date);

      acc.push({ ...elem, position });

      return acc;
    },
    []
  );

interface EventPosition extends EventData {
  position: number;
}

interface TimelineProps {
  events: EventData[];
  translateXType: TimelineTranslateXType;
}

interface TimelineState {
  translateXLength: number;
}

class Timeline extends React.Component<TimelineProps & WithStyles<TimelineStyles>, TimelineState> {
  constructor(props: TimelineProps & WithStyles<TimelineStyles>) {
    super(props);

    this.state = { translateXLength: 0 };
    this.resize = this.resize.bind(this);
  }

  private container: HTMLDivElement;

  private calculateInferiorBoundary() {
    const containerWidth = this.container.offsetWidth;
    const wrapperWidth = 3600;
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
    const { classes, events } = this.props;
    const data = getEventsWithPosition(events);

    console.log(this.state.translateXLength);

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
          style={{ width: 3600, transform: `translateX(${this.state.translateXLength}px)` }}>
          {data.map((event, key) => <Event date={event.date} position={event.position} key={key} />)}
          <FillingBar value={20} />
        </div>
      </div>
    );
  }
}

export type TimelineTranslateXType = 'left' | 'right';

export default withStyles(TimelineStyles)(Timeline);
