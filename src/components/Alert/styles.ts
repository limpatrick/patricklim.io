import { StyleRulesCallback, Theme } from 'material-ui/styles';

import { SnackbarClassKey } from 'material-ui/Snackbar';

export type AlertStyles = 'close' | SnackbarClassKey;
export const AlertStyles: Partial<StyleRulesCallback<AlertStyles>> = (theme: Theme) => ({
  root: {
    '& > div': {
      flexWrap: 'initial',
    },
  },
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});
