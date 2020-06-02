import wrapPage from './src/gatsby/wrap-page-element/browser';
import wrapRoot from './src/gatsby/wrap-root-element/browser';

export const wrapPageElement = wrapPage;
export const wrapRootElement = wrapRoot;

export const onClientEntry = () => {
  window.sessionStorage.clear();
};

export const shouldUpdateScroll = ({ prevRouterProps: { location }, getSavedScrollPosition }) => {
  const defaultPosition = [0, 0];
  const currentPosition = getSavedScrollPosition(location);

  window.scrollTo(...(currentPosition || defaultPosition));

  return false;
};
