import * as React from 'react';

import {
  EventPosition,
  TranslateXType,
  calculateFillingBarProgress,
  calculateInferiorBoundary,
  calculateMinEventDiffDays,
  calculateTranslateX,
  calculateWrapperWidth,
  getEventsWithPosition,
} from './positioning';
import { WithStyles, withStyles } from 'material-ui/styles';

import Event from '../Event';
import { EventData } from 'src/models/events';
import FillingBar from '../FillingBar';
import { TimelineStyles } from './styles';

interface TimelineProps {
  events: EventData[];
  minEventDistance: number;
  translateXType: TranslateXType;
}

interface TimelineState {
  events: EventPosition[];
  fillingBarProgress: number;
  indexSelected: number;
  translateXLength: number;
  wrapperWidth: number;
}

class Timeline extends React.Component<TimelineProps & WithStyles<TimelineStyles>, TimelineState> {
  constructor(props: TimelineProps & WithStyles<TimelineStyles>) {
    super(props);

    const { events, minEventDistance } = props;
    const minEventDiffDays = calculateMinEventDiffDays(events);
    const boundaryDistance = 60;
    const data = getEventsWithPosition(events, boundaryDistance, minEventDiffDays, minEventDistance);
    const wrapperWidth = calculateWrapperWidth(data, boundaryDistance);
    const indexSelected = 0;
    const fillingBarProgress = calculateFillingBarProgress(data[indexSelected].position, wrapperWidth);

    this.state = { translateXLength: 0, wrapperWidth, events: data, fillingBarProgress, indexSelected };
    this.resize = this.resize.bind(this);
  }

  private container: HTMLDivElement;

  private resize() {
    const { translateXLength, wrapperWidth } = this.state;
    const inferiorBoundary = calculateInferiorBoundary(wrapperWidth, this.container.offsetWidth);

    if (inferiorBoundary > translateXLength) {
      this.setState({ translateXLength: inferiorBoundary });
    }
  }

  private handleEventClick(key: number) {
    const { events, wrapperWidth } = this.state;
    const fillingBarProgress = calculateFillingBarProgress(events[key].position, wrapperWidth);

    this.setState({ fillingBarProgress, indexSelected: key });
  }

  componentWillMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  componentWillReceiveProps(nextProps: TimelineProps & WithStyles<TimelineStyles>) {
    const { translateXType } = nextProps;
    const { translateXLength, wrapperWidth } = this.state;
    const translateX = calculateTranslateX(this.container.offsetWidth, translateXLength, translateXType, wrapperWidth);

    this.setState({ translateXLength: translateX });
  }

  render() {
    const { classes } = this.props;
    const { events, wrapperWidth, fillingBarProgress, indexSelected, translateXLength } = this.state;

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
          style={{ width: wrapperWidth, transform: `translateX(${translateXLength}px)` }}>
          {events.map((event, key) => (
            <Event
              date={event.date}
              position={event.position}
              key={key}
              onClick={() => this.handleEventClick(key)}
              active={events[indexSelected] === event}
              older={key < indexSelected}
            />
          ))}
          <FillingBar value={fillingBarProgress} />
        </div>
      </div>
    );
  }
}

export type TimelineTranslateXType = TranslateXType;

export default withStyles(TimelineStyles)(Timeline);
