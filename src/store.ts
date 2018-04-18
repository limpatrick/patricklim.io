import { Middleware, applyMiddleware, createStore } from 'redux';
import reducers, { StoreState } from './redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const configureMiddlewares = () => {
  const middlewares: Middleware[] = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return middlewares;
};

const configureStore = () => {
  const middlewares = configureMiddlewares();

  return createStore<StoreState>(reducers, applyMiddleware(...middlewares));
};

export default configureStore();
