// @ts-nocheck
import { GatsbySSR } from 'gatsby';
import React from 'react';
import WrapRootElement from './wrap-root-element';

const wrapRootElement: GatsbySSR['wrapRootElement'] = ({ element }) => (
  <WrapRootElement>{element}</WrapRootElement>
);

export default wrapRootElement;
