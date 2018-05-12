import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';
import { isEqual, isUndefined } from 'lodash';
import withVelocity, { WithVelocityInjectedProps } from 'components/containers/velocity/withVelocity';

import Chip from 'material-ui/Chip';
import { Event } from 'src/api/typings';
import { EventDescriptionStyles } from './styles';
import Grid from 'material-ui/Grid';
import { StoreState } from 'src/redux';
import Typography from 'material-ui/Typography';
import { VelocityComponent } from 'velocity-react';
import { connect } from 'react-redux';
import eventsSelectors from 'src/redux/events/selectors';

interface EventDescriptionStateToProps {
  event: Event;
}

class EventDescription extends React.Component<
  EventDescriptionStateToProps & WithStyles<EventDescriptionStyles> & WithVelocityInjectedProps
> {
  componentWillReceiveProps(
    nextProps: EventDescriptionStateToProps & WithStyles<EventDescriptionStyles> & WithVelocityInjectedProps
  ) {
    if (!isEqual(this.props.event, nextProps.event)) {
      nextProps.remount();
    }
  }

  render() {
    const { classes, event } = this.props;

    if (isUndefined(event)) {
      return null;
    }

    const { date, description, duration, labels, organization, title } = event;
    const durationAsMonths = duration.asMonths();
    const from =
      durationAsMonths > 12
        ? date
            .clone()
            .subtract(durationAsMonths - 1, 'months')
            .format('YYYY')
        : date
            .clone()
            .subtract(durationAsMonths - 1, 'months')
            .format('MMMM YYYY');
    const to = durationAsMonths > 12 ? date.format('YYYY') : date.format('MMMM YYYY');

    return (
      <Grid container direction="column" alignItems="center" justify="center">
        <Grid item xs={12}>
          <Typography variant="display3" align="center" className={classes.title}>
            {title}
          </Typography>
        </Grid>
        {organization && (
          <Grid item xs={12}>
              <Typography variant="headline" align="center">
                at <span className={classes.highlight}>{organization}</span>
              </Typography>
          </Grid>
        )}
        <Grid item xs={12}>
          <VelocityComponent animation="transition.slideLeftIn" duration={750} delay={500} runOnMount>
            <Typography variant="caption" align="center" className={classes.opacity}>
              {durationAsMonths > 1 ? (
                <span>
                  From {from} to {to}
                  {durationAsMonths < 12 && ` (${durationAsMonths} months)`}
                </span>
              ) : (
                from
              )}
            </Typography>
          </VelocityComponent>
        </Grid>
        <Grid item xs={12}>
          <VelocityComponent animation="transition.flipXIn" duration={1000} delay={1000} runOnMount>
            <div className={classes.opacity}>
              {labels.map((label, key) => <Chip className={classes.chip} label={label} key={key} />)}
            </div>
          </VelocityComponent>
        </Grid>
        <Grid item xs={12}>
          <VelocityComponent animation="transition.slideLeftIn" duration={750} delay={1500} runOnMount>
            <Typography variant="body2" paragraph align="justify" className={classes.opacity}>
              {description}
            </Typography>
          </VelocityComponent>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state: StoreState): EventDescriptionStateToProps => ({
  event: eventsSelectors.getSelectedEvent(state.events),
});

export default connect<EventDescriptionStateToProps>(mapStateToProps)(
  withVelocity({ animation: 'transition.whirlIn', delay: 0, duration: 1000 })(
    withStyles(EventDescriptionStyles)(EventDescription)
  )
);
