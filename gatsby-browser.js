import wrapPage from './src/gatsby/wrap-page-element/browser';
import wrapRoot from './src/gatsby/wrap-root-element/browser';

export const wrapPageElement = wrapPage;
export const wrapRootElement = wrapRoot;

export const shouldUpdateScroll = ({ prevRouterProps: { location }, getSavedScrollPosition }) => {
  const currentPosition = getSavedScrollPosition(location);

  window.scrollTo(...(currentPosition || [0, 0]));

  return false;
};
