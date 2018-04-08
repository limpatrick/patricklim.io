import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';

import Event from '../Event';
import { EventData } from 'src/models/events';
import FillingBar from '../FillingBar';
import Label from '../Label';
import { TimelineStyles } from './styles';

export interface EventPosition extends EventData, Positionable {}

export interface YearLabel extends Positionable {
  text: string;
}

interface Positionable {
  position: number;
}

interface TimelineProps {
  events: EventPosition[];
  translateX: number;
  wrapperWidth: number;
  yearLabels: YearLabel[];
}

interface TimelineState {
  fillingBarProgress: number;
  indexSelected: number;
}

class Timeline extends React.Component<TimelineProps & WithStyles<TimelineStyles>, TimelineState> {
  constructor(props: TimelineProps & WithStyles<TimelineStyles>) {
    super(props);

    const { events, wrapperWidth } = this.props;
    const indexSelected = 0;
    const fillingBarProgress = this.calculateFillingBarProgress(events[indexSelected].position, wrapperWidth);

    this.state = { fillingBarProgress, indexSelected };
  }

  private calculateFillingBarProgress = (eventXPosition: number, wrapperWidth: number) =>
    eventXPosition / wrapperWidth * 100

  handleEventClick = (key: number) => () =>
    this.setState((state, { events, wrapperWidth }) => ({
      fillingBarProgress: this.calculateFillingBarProgress(events[key].position, wrapperWidth),
      indexSelected: key,
    }))

  render() {
    const { classes, events, translateX, wrapperWidth, yearLabels } = this.props;
    const { fillingBarProgress, indexSelected } = this.state;

    return (
      <div className={classes.container}>
        <div className={classes.wrapper} style={{ width: wrapperWidth, transform: `translateX(${translateX}px)` }}>
          {events.map((event, key) => (
            <Event
              date={event.date}
              position={event.position}
              key={key}
              onClick={this.handleEventClick(key)}
              active={events[indexSelected] === event}
              older={key < indexSelected}
            />
          ))}
          {yearLabels.map((label, key) => <Label {...label} key={key} />)}
          <FillingBar value={fillingBarProgress} />
        </div>
      </div>
    );
  }
}

export default withStyles(TimelineStyles)(Timeline);
