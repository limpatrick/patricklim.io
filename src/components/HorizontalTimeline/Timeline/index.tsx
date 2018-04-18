import * as React from 'react';

import { EventPosition, YearLabel } from '../typings';
import { WithStyles, withStyles } from 'material-ui/styles';

import Event from '../Event';
import FillingBar from '../FillingBar';
import Label from '../Label';
import { TimelineStyles } from './styles';

interface TimelineProps {
  events: EventPosition[];
  index: number;
  onEventClick: (id: string) => void;
  translateX: number;
  wrapperWidth: number;
  yearLabels: YearLabel[];
}

interface TimelineState {
  fillingBarProgress: number;
  index: number;
}

class Timeline extends React.Component<TimelineProps & WithStyles<TimelineStyles>, TimelineState> {
  constructor(props: TimelineProps & WithStyles<TimelineStyles>) {
    super(props);

    const { events, wrapperWidth, index } = this.props;
    const eventXPosition = events.length ? events[index].position : 0;
    const fillingBarProgress = this.calculateFillingBarProgress(eventXPosition, wrapperWidth);

    this.state = { fillingBarProgress, index };
  }

  private calculateFillingBarProgress = (eventXPosition: number, wrapperWidth: number) =>
    eventXPosition / wrapperWidth * 100

  handleEventClick = (index: number) => () => {
    const { onEventClick } = this.props;

    this.setState((state, { events, wrapperWidth }) => ({
      fillingBarProgress: this.calculateFillingBarProgress(events[index].position, wrapperWidth),
      index,
    }));

    onEventClick(this.props.events[index].id);
  }

  componentWillReceiveProps({ index, events, wrapperWidth }: TimelineProps & WithStyles<TimelineStyles>) {
    this.setState({
      fillingBarProgress: this.calculateFillingBarProgress(events[index].position, wrapperWidth),
      index,
    });
  }

  render() {
    const { classes, events, translateX, wrapperWidth, yearLabels } = this.props;
    const { fillingBarProgress, index } = this.state;

    return (
      <div className={classes.container}>
        <div className={classes.wrapper} style={{ width: wrapperWidth, transform: `translateX(${translateX}px)` }}>
          {events.map((event, key) => (
            <Event
              date={event.date}
              position={event.position}
              key={event.id}
              onClick={this.handleEventClick(key)}
              active={events[index] === event}
              older={key < index}
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
