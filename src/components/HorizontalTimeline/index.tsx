import * as React from 'react';

import Navigation, { NavigationType } from './Navigation';
import Timeline, { TimelineTranslateXType } from './Timeline';
import { WithStyles, withStyles } from 'material-ui/styles';

import { HorizontalTimelineStyles } from './styles';
import { events } from 'src/models/events';

interface HorizontalTimelineProps {}

interface HorizontalTimelineState {
  translateXTo: TimelineTranslateXType;
}

class HorizontalTimeline extends React.Component<
  HorizontalTimelineProps & WithStyles<HorizontalTimelineStyles>,
  HorizontalTimelineState
> {
  constructor(props: HorizontalTimelineProps & WithStyles<HorizontalTimelineStyles>) {
    super(props);

    this.state = { translateXTo: 'left' };
  }

  private handleNavigation(type: NavigationType) {
    this.setState({ translateXTo: type === 'previous' ? 'left' : 'right' });
  }

  render() {
    const { classes } = this.props;
    const { translateXTo } = this.state;

    return (
      <div className={classes.container}>
        <Navigation type="previous" onClick={(type) => this.handleNavigation(type)} />
        <Timeline events={events} translateXType={translateXTo} minEventDistance={200} />
        <Navigation type="next" onClick={(type) => this.handleNavigation(type)} />
      </div>
    );
  }
}

export default withStyles(HorizontalTimelineStyles)(HorizontalTimeline);
