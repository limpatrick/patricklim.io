import * as React from 'react';

import { Options } from './options';

interface TagCloudProps {}

class TagCloud extends React.Component<TagCloudProps> {
  static readonly canvasId = 'tag-cloud-canvas';

  componentDidMount() {
    TagCanvas.Start(TagCloud.canvasId, undefined, Options);
  }

  componentWillUnmount() {
    TagCanvas.Delete(TagCloud.canvasId);
  }

  render() {
    return (
      <canvas width="500" height="500" id={TagCloud.canvasId}>
        <ul>
          <li>
            <a href="#" data-weight="14">
              1000
            </a>
          </li>
          <li>
            <a href="#" data-weight="18">
              background
            </a>
          </li>
          <li>
            <a href="#" data-weight="40">
              canvas
            </a>
          </li>
          <li>
            <a href="#" data-weight="22">
              chart
            </a>
          </li>
          <li>
            <a href="#" data-weight="18">
              charts
            </a>
          </li>
          <li>
            <a href="#" data-weight="60">
              cloud
            </a>
          </li>
          <li>
            <a href="#" data-weight="18">
              clouds
            </a>
          </li>
          <li>
            <a href="#" data-weight="17">
              example
            </a>
          </li>
          <li>
            <a href="#" data-weight="18">
              goat
            </a>
          </li>
          <li>
            <a href="#" data-weight="17">
              goat1000
            </a>
          </li>
          <li>
            <a href="#" data-weight="30">
              graph
            </a>
          </li>
          <li>
            <a href="#" data-weight="21">
              graphs
            </a>
          </li>
          <li>
            <a href="#" data-weight="17">
              html
            </a>
          </li>
          <li>
            <a href="#" data-weight="50">
              html5
            </a>
          </li>
          <li>
            <a href="#" data-weight="23">
              image
            </a>
          </li>
          <li>
            <a href="#" data-weight="24">
              javascript
            </a>
          </li>
          <li>
            <a href="#" data-weight="26">
              jpeg
            </a>
          </li>
          <li>
            <a href="#" data-weight="13">
              jpegsaver
            </a>
          </li>
          <li>
            <a href="#" data-weight="32">
              jquery
            </a>
          </li>
          <li>
            <a href="#" data-weight="13">
              lib
            </a>
          </li>
          <li>
            <a href="#" data-weight="27">
              library
            </a>
          </li>
          <li>
            <a href="#" data-weight="17">
              link
            </a>
          </li>
          <li>
            <a href="#" data-weight="65">
              php
            </a>
          </li>
          <li>
            <a href="#" data-weight="14">
              plugin
            </a>
          </li>
          <li>
            <a href="#" data-weight="22">
              saver
            </a>
          </li>
          <li>
            <a href="#" data-weight="17">
              screensaver
            </a>
          </li>
          <li>
            <a href="#" data-weight="13">
              script
            </a>
          </li>
          <li>
            <a href="#" data-weight="65">
              svg
            </a>
          </li>
          <li>
            <a href="#" data-weight="21">
              svggraph
            </a>
          </li>
          <li>
            <a href="#" data-weight="62">
              tag
            </a>
          </li>
          <li>
            <a href="#" data-weight="13">
              tagcanvas
            </a>
          </li>
          <li>
            <a href="#" data-weight="17">
              tagcloud
            </a>
          </li>
          <li>
            <a href="#" data-weight="13">
              text
            </a>
          </li>
          <li>
            <a href="#" data-weight="17">
              word
            </a>
          </li>
        </ul>
      </canvas>
    );
  }
}

export default TagCloud;
