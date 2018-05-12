import { primaryColor, secondaryColor } from 'src/theme';

import { StyleRulesCallback } from 'material-ui/styles';

export type HomeStyles = 'container' | 'bold' | 'light' | 'icon' | 'marginTop' | 'highlight' | 'link';
export const HomeStyles: StyleRulesCallback<HomeStyles> = (theme) => ({
  container: {
    minHeight: 'inherit',
  },
  bold: {
    fontWeight: 900,
    '& > *': {
      opacity: 0,
    },
  },
  light: {
    fontWeight: 100,
    '& > *': {
      opacity: 0,
    },
  },
  icon: {
    marginRight: 4,
    fontSize: 20,
  },
  marginTop: {
    marginTop: 75,
    opacity: 0,
  },
  highlight: {
    color: primaryColor,
    fontFamily: 'source code pro',
    fontWeight: 400,
  },
  link: {
    color: primaryColor,
    textDecoration: 'none',
    fontFamily: 'source code pro',
    fontWeight: 600,
    transition: theme.transitions.create('color', {
      easing: theme.transitions.easing.easeOut,
    }),
    '&:hover': {
      color: secondaryColor,
    },
  },
});
