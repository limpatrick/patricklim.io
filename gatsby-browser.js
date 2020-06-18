import wrapPage from './gatsby/wrap-page-element/browser';
import wrapRoot from './gatsby/wrap-root-element/browser';

export const wrapPageElement = wrapPage;
export const wrapRootElement = wrapRoot;

export const onClientEntry = () => {
  window.sessionStorage.clear();

  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`);
    console.log(`# IntersectionObserver is polyfilled!`);
  }
};

export const shouldUpdateScroll = ({ prevRouterProps: { location }, getSavedScrollPosition }) => {
  const defaultPosition = [0, 0];
  const currentPosition = getSavedScrollPosition(location);

  window.scrollTo(...(currentPosition || defaultPosition));

  return false;
};
