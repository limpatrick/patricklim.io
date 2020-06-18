import { GatsbyBrowser } from 'gatsby';
import React from 'react';
import WrapRootElement from './wrap-root-element';

const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => (
  <WrapRootElement>{element}</WrapRootElement>
);

export default wrapRootElement;
