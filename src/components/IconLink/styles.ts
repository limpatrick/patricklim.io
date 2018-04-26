import { StyleRulesCallback, Theme } from 'material-ui/styles';

import { TooltipClassKey } from 'material-ui/Tooltip';

export type IconLinkStyles = 'iconButton' | TooltipClassKey;
export const IconLinkStyles: Partial<StyleRulesCallback<IconLinkStyles>> = (theme: Theme) => ({
  iconButton: {
    textDecoration: 'none',
    '&:hover': {
      color: 'rgba(255, 255, 255, 0.7)',
      transition: theme.transitions.create('color', {
        easing: theme.transitions.easing.easeInOut,
      }),
    },
  },
  tooltip: {
    margin: 0,
  },
});
