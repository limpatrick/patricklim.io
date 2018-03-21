/// <reference path="utils/modules.d.ts" />

import 'typeface-roboto';

import * as React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import App from 'components/App/App';
import CssBaseline from 'material-ui/CssBaseline';
import { render } from 'react-dom';

render(
  <div>
    <CssBaseline />
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);
