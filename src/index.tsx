/// <reference path="utils/modules.d.ts" />

import 'typeface-roboto';
import 'typeface-open-sans';

import * as React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import App from 'components/App';
import CssBaseline from 'material-ui/CssBaseline';
import { MuiThemeProvider } from 'material-ui/styles';
import { render } from 'react-dom';
import theme from './theme';

render(
  <div>
    <CssBaseline />
    <BrowserRouter>
      <Route
        render={() => (
          <MuiThemeProvider theme={theme}>
            <App />
          </MuiThemeProvider>
        )}
      />
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);
