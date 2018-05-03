import { altColor, primaryBgColor, primaryColor } from 'src/theme';

import { StyleRulesCallback } from 'material-ui/styles';

export type FooterStyles = 'container' | 'icons' | 'link';
export const FooterStyles: StyleRulesCallback<FooterStyles> = (theme) => ({
  container: {
    background: primaryBgColor,
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    '& a, & a > *': {
      color: altColor,
      transition: theme.transitions.create('color', {
        easing: theme.transitions.easing.easeInOut,
      }),
      '&:hover': {
        color: primaryColor,
      },
    },
    [theme.breakpoints.down(320)]: {
      justifyContent: 'flex-start',
    },
  },
  icons: {
    position: 'absolute',
    right: 0,
    display: 'inline-flex',
  },
  link: {
    textDecoration: 'none',
    [theme.breakpoints.down(250)]: {
      display: 'none',
    },
    [theme.breakpoints.down(320)]: {
      paddingLeft: 10,
    },
  },
});
