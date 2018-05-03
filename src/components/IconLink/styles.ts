import { StyleRulesCallback, Theme } from 'material-ui/styles';

import { TooltipClassKey } from 'material-ui/Tooltip';
import { primaryColor } from 'src/theme';

export type IconLinkStyles = 'iconButton' | TooltipClassKey;
export const IconLinkStyles: Partial<StyleRulesCallback<IconLinkStyles>> = (theme: Theme) => ({
  iconButton: {
    textDecoration: 'none',
    transition: theme.transitions.create('color', {
      easing: theme.transitions.easing.easeInOut,
    }),
    '&:hover': {
      color: primaryColor,
    },
  },
  tooltip: {
    margin: 0,
  },
});
