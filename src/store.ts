import { Middleware, applyMiddleware, createStore } from 'redux';
import reducers, { StoreState } from './redux/reducers';

import { createLogger } from 'redux-logger';

const configureMiddlewares = () => {
  const middlewares: Middleware[] = [];

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
