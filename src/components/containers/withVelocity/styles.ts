import { StyleRulesCallback, Theme } from 'material-ui/styles';

export type WithVelocityStyles = 'hidden' | 'container';
export const WithVelocityStyles: StyleRulesCallback<WithVelocityStyles> = (theme: Theme) => ({
  hidden: {
    height: '100%',
    width: '100%',
  },
  container: {
    height: '100%',
    paddingRight: 24,
    paddingLeft: 24,
    [theme.breakpoints.down('xs')]: {
      paddingRight: 16,
      paddingLeft: 16,
    },
  },
});
