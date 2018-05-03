import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';

import Chip from 'material-ui/Chip';
import { Event } from 'src/api/typings';
import { EventDescriptionStyles } from './styles';
import Grid from 'material-ui/Grid';
import { StoreState } from 'src/redux';
import Typography from 'material-ui/Typography';
import { connect } from 'react-redux';
import eventsSelectors from 'src/redux/events/selectors';
import { isUndefined } from 'lodash';

interface EventDescriptionStateToProps {
  event: Event;
}

class EventDescription extends React.Component<EventDescriptionStateToProps & WithStyles<EventDescriptionStyles>> {
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
        {title && (
          <Grid item xs={12}>
            <Typography variant="display3" align="center" className={classes.title}>
              {title}
            </Typography>
          </Grid>
        )}
        {organization && (
          <Grid item xs={12}>
            <Typography variant="headline" align="center">
              at <span className={classes.highlight}>{organization}</span>
            </Typography>
          </Grid>
        )}
        <Grid item xs={12}>
          <Typography variant="caption" align="center">
            {durationAsMonths > 1 ? (
              <span>
                From {from} to {to}
                {durationAsMonths < 12 && ` (${durationAsMonths} months)`}
              </span>
            ) : (
              from
            )}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {labels.map((label, key) => <Chip className={classes.chip} label={label} key={key} />)}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" paragraph align="justify">
            {description}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state: StoreState): EventDescriptionStateToProps => ({
  event: eventsSelectors.getSelectedEvent(state.events),
});

export default connect<EventDescriptionStateToProps>(mapStateToProps)(
  withStyles(EventDescriptionStyles)(EventDescription)
);
