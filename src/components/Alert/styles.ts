import { StyleRulesCallback } from 'material-ui/styles';

export type AlertStyles = 'close';
export const AlertStyles: StyleRulesCallback<AlertStyles> = (theme) => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});
