import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';

import Grid from 'material-ui/Grid';
import { Moment } from 'moment';
import { Options } from './options';
import Paper from 'material-ui/Paper';
import { StoreState } from 'src/redux';
import { Tag } from 'src/api/typings';
import { TagCloudStyles } from './styles';
import Typography from 'material-ui/Typography';
import { connect } from 'react-redux';
import eventsSelectors from 'src/redux/events/selectors';

interface TagCloudStateToProps {
  date: Moment | null;
  tags: Tag[];
}

class TagCloud extends React.Component<TagCloudStateToProps & WithStyles<TagCloudStyles>> {
  static readonly canvasId = 'tag-cloud-canvas';

  componentDidMount() {
    TagCanvas.Start(TagCloud.canvasId, undefined, Options);
  }

  componentWillUnmount() {
    TagCanvas.Delete(TagCloud.canvasId);
  }

  componentDidUpdate() {
    TagCanvas.Update(TagCloud.canvasId);
  }

  render() {
    const { classes, date, tags } = this.props;

    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <canvas width="500" height="500" id={TagCloud.canvasId} className={classes.container}>
              <ul>
                {tags.map(({ label, weight }, key) => (
                  <li key={key}>
                    <a href="#" data-weight={weight}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </canvas>
          </Paper>
        </Grid>
        {date && (
          <Grid item xs={12}>
            <Typography variant="caption">Acquired skills until {date.format('MMM YYYY')}</Typography>
          </Grid>
        )}
      </Grid>
    );
  }
}

const mapStateToProps = (state: StoreState): TagCloudStateToProps => {
  const selectedEvent = eventsSelectors.getSelectedEvent(state.events);

  return {
    date: selectedEvent ? selectedEvent.date : null,
    tags: eventsSelectors.getTags(state.events),
  };
};

export default connect<TagCloudStateToProps>(mapStateToProps)(withStyles(TagCloudStyles)(TagCloud));
