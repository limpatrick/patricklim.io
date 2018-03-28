import * as H from 'history';
import * as types from './types';

export interface InitializeRoute {
  type: types.INITIALIZE_ROUTE;
  nextPath: string;
}

export interface UpdateRoute {
  type: types.UPDATE_ROUTE;
  previousPath: string;
  nextPath: string;
}

export type Actions = InitializeRoute | UpdateRoute;

export const initializeRoute = (location: H.Location): InitializeRoute => ({
  type: types.INITIALIZE_ROUTE,
  nextPath: location.pathname,
});

export const updateRoute = (currentLocation: H.Location, nextPath: string): UpdateRoute => ({
  type: types.UPDATE_ROUTE,
  previousPath: currentLocation.pathname,
  nextPath,
});
