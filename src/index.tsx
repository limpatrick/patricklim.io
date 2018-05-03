/// <reference path="utils/modules.d.ts" />
/// <reference path="utils/jquery-tagcanvas/tagcanvas.d.ts" />
/// <reference path="utils/velocity-react.d.ts" />

import 'typeface-roboto';
import 'typeface-source-code-pro';
import 'typeface-open-sans';
import 'velocity-animate';
import 'velocity-animate/velocity.ui';
import 'jquery-tagcanvas/tagcanvas.min';

import * as React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import App from 'components/App';
import CssBaseline from 'material-ui/CssBaseline';
import { MuiThemeProvider } from 'material-ui/styles';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import store from './store';
import theme from './theme';

render(
  <div>
    <CssBaseline />
    <Provider store={store}>
      <BrowserRouter>
        <Route
          render={() => (
            <MuiThemeProvider theme={theme}>
              <App />
            </MuiThemeProvider>
          )}
        />
      </BrowserRouter>
    </Provider>
  </div>,
  document.getElementById('root')
);
