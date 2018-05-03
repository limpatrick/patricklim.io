import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';

import { Options } from './options';
import { StoreState } from 'src/redux';
import { Tag } from 'src/api/typings';
import { TagCloudStyles } from './styles';
import { connect } from 'react-redux';
import eventsSelectors from 'src/redux/events/selectors';

interface TagCloudStateToProps {
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
    const { classes, tags } = this.props;

    return (
      <canvas width="500" height="500" id={TagCloud.canvasId} className={classes.canvas}>
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
    );
  }
}

const mapStateToProps = (state: StoreState): TagCloudStateToProps => ({
  tags: eventsSelectors.getSkills(state.events),
});

export default connect<TagCloudStateToProps>(mapStateToProps)(withStyles(TagCloudStyles)(TagCloud));
