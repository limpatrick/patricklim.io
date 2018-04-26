import { StyleRulesCallback, Theme } from 'material-ui/styles';

import { TooltipClassKey } from 'material-ui/Tooltip';

export type IconNavStyles = 'navLink' | TooltipClassKey;
export const IconNavStyles: Partial<StyleRulesCallback<IconNavStyles>> = (theme: Theme) => ({
  navLink: {
    textDecoration: 'none',
    display: 'inline-flex',
    '&:hover, & *:hover': {
      color: 'rgba(255, 255, 255, 0.7)',
      transition: theme.transitions.create('color', {
        easing: theme.transitions.easing.easeInOut,
      }),
    },
    '& > *': {
      alignItems: 'center',
      display: 'inline-flex',
      flex: '0 0 auto',
      height: 48,
      justifyContent: 'center',
      padding: 0,
      textAlign: 'center',
      verticalAlign: 'middle',
      width: 48,
    },
  },
  tooltip: {
    margin: 0,
  },
});
