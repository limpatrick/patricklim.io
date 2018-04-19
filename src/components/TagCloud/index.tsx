import * as React from 'react';

import { Options } from './options';
import { StoreState } from 'src/redux';
import { Tag } from 'src/api/typings';
import { connect } from 'react-redux';
import selectors from 'src/redux/selectors';

interface TagCloudStateToProps {
  tags: Tag[];
}

class TagCloud extends React.Component<TagCloudStateToProps> {
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
    const { tags } = this.props;

    return (
      <canvas width="500" height="500" id={TagCloud.canvasId}>
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
  tags: selectors.getTags(state),
});

export default connect<TagCloudStateToProps>(mapStateToProps)(TagCloud);
