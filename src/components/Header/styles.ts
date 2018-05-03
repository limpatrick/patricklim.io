import { altColor, defaultColor, lightDefaultColor, primaryColor, secondaryColor, thirdColor } from 'src/theme';

import { StyleRulesCallback } from 'material-ui/styles';

export type HeaderStyles = 'appBar' | 'toolbar' | 'flex' | 'logo' | 'icons';
export const HeaderStyles: StyleRulesCallback<HeaderStyles> = (theme) => ({
  appBar: {
    background: `linear-gradient(135deg, ${primaryColor}, ${thirdColor}, ${secondaryColor})`,
  },
  toolbar: {
    justifyContent: 'flex-end',
  },
  flex: {
    flex: 1,
  },
  logo: {
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: altColor,
    transition: theme.transitions.create('color', {
      easing: theme.transitions.easing.easeInOut,
    }),
    '&:active, &:hover': {
      color: defaultColor,
    },
    '& > *': {
      color: 'inherit',
      fontWeight: 100,
    },
  },
  icons: {
    display: 'inline-flex',
    '& a > *': {
      color: altColor,
      transition: theme.transitions.create('color', {
        easing: theme.transitions.easing.easeInOut,
      }),
      '&:hover': {
        color: lightDefaultColor,
      },
    },
    '& a:first-child > span > span': {
      '&:hover': {
        color: lightDefaultColor,
      },
    },
  },
});
