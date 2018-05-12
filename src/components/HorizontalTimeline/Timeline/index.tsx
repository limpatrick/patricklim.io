import * as React from 'react';

import { EventPosition, YearLabel } from '../typings';
import { WithStyles, withStyles } from 'material-ui/styles';

import Event from '../Event';
import EventTooltip from '../EventTooltip';
import FillingBar from '../FillingBar';
import Label from '../Label';
import { TimelineStyles } from './styles';
import { eventWidth } from '../Event/styles';

interface TimelineProps {
  events: EventPosition[];
  format: string;
  index: number;
  onEventClick: (id: string) => void;
  translateX: number;
  wrapperWidth: number;
  yearLabels: YearLabel[];
}

interface TimelineState {
  fillingBarProgress: number;
  index: number;
  indexHover: number;
}

class Timeline extends React.Component<TimelineProps & WithStyles<TimelineStyles>, TimelineState> {
  constructor(props: TimelineProps & WithStyles<TimelineStyles>) {
    super(props);

    const { events, wrapperWidth, index } = this.props;
    const eventXPosition = events.length ? events[index].position : 0;
    const fillingBarProgress = this.calculateFillingBarProgress(eventXPosition, wrapperWidth);

    this.state = { fillingBarProgress, index, indexHover: -1 };
  }

  private static readonly EVENT_CENTER = eventWidth / 2;

  private calculateFillingBarProgress = (eventXPosition: number, wrapperWidth: number) =>
    (eventXPosition + Timeline.EVENT_CENTER) / wrapperWidth * 100

  handleEventClick = (index: number) => () => {
    const { onEventClick } = this.props;

    this.setState((state, { events, wrapperWidth }) => ({
      fillingBarProgress: this.calculateFillingBarProgress(events[index].position, wrapperWidth),
      index,
    }));

    onEventClick(this.props.events[index].id);
  }

  handleEventMouseEnter = (index: number) => () => {
    this.setState({
      indexHover: index,
    });
  }

  handleEventMouseLeave = () => () => {
    this.setState({
      indexHover: -1,
    });
  }

  componentWillReceiveProps({ index, events, wrapperWidth }: TimelineProps & WithStyles<TimelineStyles>) {
    const fillingBarProgress = this.calculateFillingBarProgress(events[index].position, wrapperWidth);

    if (this.state.fillingBarProgress !== fillingBarProgress) {
      this.setState({
        fillingBarProgress,
        index,
      });
    }
  }

  render() {
    const { classes, events, format, translateX, wrapperWidth, yearLabels } = this.props;
    const { fillingBarProgress, index, indexHover } = this.state;

    return (
      <div className={classes.container}>
        <div className={classes.overflowVisible}>
          <div className={classes.wrapper}>
            <div className={classes.content} style={{ width: wrapperWidth, transform: `translateX(${translateX}px)` }}>
              {events.map((event, key) => (
                <EventTooltip
                  key={event.id}
                  position={event.position + Timeline.EVENT_CENTER}
                  title={event.title}
                  open={events[indexHover] === event}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={classes.overflowHidden}>
          <div className={classes.content} style={{ width: wrapperWidth, transform: `translateX(${translateX}px)` }}>
            {events.map((event, key) => (
              <Event
                active={events[index] === event}
                date={event.date}
                format={format}
                key={event.id}
                older={key < index}
                onClick={this.handleEventClick(key)}
                onMouseEnter={this.handleEventMouseEnter(key)}
                onMouseLeave={this.handleEventMouseLeave()}
                position={event.position}
              />
            ))}
            <FillingBar value={fillingBarProgress} />
            {yearLabels.map((label, key) => <Label {...label} key={key} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(TimelineStyles)(Timeline);
