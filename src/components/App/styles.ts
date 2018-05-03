import { altColor, primaryBgColor } from 'src/theme';

import { StyleRulesCallback } from 'material-ui/styles';

export const scrollbarsContentClass = 'scrollbarsContent';

export type AppStyles = 'wrapper' | 'content' | 'scrollbars' | 'minHeight';
export const AppStyles: StyleRulesCallback<AppStyles> = (theme) => {
  const headerHeight = 64;
  const xsHeaderHeight = 48;
  const calcHeight = `calc(100vh - ${headerHeight}px)`;
  const calcXsHeight = `calc(100vh - ${xsHeaderHeight}px)`;

  return {
    wrapper: {
      position: 'relative',
      top: 0,
      height: '100vh',
      overflow: 'hidden',
      background: primaryBgColor,
    },
    content: {
      height: '100%',
      width: '100%',
    },
    scrollbars: {
      marginTop: headerHeight,
      height: `${calcHeight} !important`,
      [theme.breakpoints.down('xs')]: {
        marginTop: xsHeaderHeight,
        height: `${calcXsHeight} !important`,
      },
      '& > div > div': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        '& > *:first-child': {
          background: altColor,
        },
        '&$minHeight': {
          minHeight: calcHeight,
        },
      },
      [`& .${scrollbarsContentClass}`]: {
        minHeight: 'calc(100vh - 112px)',
        [theme.breakpoints.down('xs')]: {
          minHeight: 'calc(100vh - 96px)',
        },
      },
    },
    minHeight: {
      overflow: 'hidden',
      [theme.breakpoints.down(400)]: {
        overflow: 'visible',
      },
    },
  };
};
