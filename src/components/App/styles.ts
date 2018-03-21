import { StyleRules, StyleRulesCallback, Theme } from 'material-ui/styles';

import background from 'src/assets/img/background.jpg';

export type AppStyles = 'wrapper';
export const appStyles: StyleRules<AppStyles> = {
  wrapper: {
    position: 'relative',
    top: 0,
    height: '100vh',
  },
};

export type AppContentStyles = 'content' | 'scrollbars';
export const appContentStyles: StyleRules<AppContentStyles> = {
  content: {
    maxHeight: 'calc(100% - 64px)',
  },
  scrollbars: {
    minHeight: 'fill-available',
    zIndex: 4,
  },
};

export type AppContainerStyles = 'container';
export const appContainerStyles: StyleRulesCallback<AppContainerStyles> = (theme: Theme) => ({
  container: {
    height: '100%',
    paddingRight: 24,
    paddingLeft: 24,
    [theme.breakpoints.down('xs')]: {
      paddingRight: 16,
      paddingLeft: 16,
    },
  },
});

export type AppBackgroundStyles = 'background';
export const appBackgroundStyles: StyleRules<AppBackgroundStyles> = {
  background: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    position: 'absolute',
    zIndex: 1,
    '&:after': {
      backgroundColor: 'rgba(15, 51, 77, 0.5)',
      content: '""',
      height: '100%',
      left: 0,
      position: 'absolute',
      top: 0,
      width: '100%',
    },
  },
};
