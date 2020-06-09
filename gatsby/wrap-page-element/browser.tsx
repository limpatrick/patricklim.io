import { GatsbyBrowser } from 'gatsby';
import React from 'react';
import WrapPageElement from './wrap-page-element';

const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
  props: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    pageContext: { intl },
  },
}) => <WrapPageElement intl={intl}>{element}</WrapPageElement>;

export default wrapPageElement;
