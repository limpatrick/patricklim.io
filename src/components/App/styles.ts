import { altColor, primaryBgColor } from 'src/theme';

import { StyleRulesCallback } from 'material-ui/styles';

export const scrollbarsContentClass = 'scrollbarsContent';

export type AppStyles = 'container' | 'scrollbars' | 'content';
export const AppStyles: StyleRulesCallback<AppStyles> = (theme) => {
  const headerHeight = 64;
  const xsHeaderHeight = 48;
  const footerHeight = 48;

  return {
    container: {
      position: 'relative',
      top: 0,
      height: '100vh',
      overflow: 'hidden',
      background: primaryBgColor,
    },
    content: {},
    scrollbars: {
      '& > div:first-child': {
        marginTop: headerHeight,
        [theme.breakpoints.down('xs')]: {
          marginTop: xsHeaderHeight,
        },
      },
      '& $content': {
        minHeight: `calc(100vh - ${headerHeight}px)`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('xs')]: {
          minHeight: `calc(100vh - ${xsHeaderHeight}px)`,
        },
        '& > div:first-child': {
          background: altColor,
          [`& .${scrollbarsContentClass}`]: {
            minHeight: `calc(100vh - ${headerHeight + footerHeight}px)`,
            [theme.breakpoints.down('xs')]: {
              minHeight: `calc(100vh - ${xsHeaderHeight + footerHeight}px)`,
            },
          },
        },
      },
    },
  };
};
