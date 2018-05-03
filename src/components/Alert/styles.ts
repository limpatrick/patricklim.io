import { StyleRulesCallback, Theme } from 'material-ui/styles';
import { altColor, primaryColor } from 'src/theme';

import { SnackbarClassKey } from 'material-ui/Snackbar';

export type AlertStyles = 'close' | SnackbarClassKey;
export const AlertStyles: Partial<StyleRulesCallback<AlertStyles>> = (theme: Theme) => ({
  root: {
    '& > div': {
      flexWrap: 'initial',
      background: primaryColor,
      color: altColor,
    },
  },
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});
