// @ts-nocheck
import { GatsbySSR } from 'gatsby';
import React from 'react';
import WrapPageElement from './wrap-page-element';

const wrapPageElement: GatsbySSR['wrapPageElement'] = ({
  element,
  props: {
    pageContext: { intl },
  },
}) => <WrapPageElement intl={intl}>{element}</WrapPageElement>;

export default wrapPageElement;
