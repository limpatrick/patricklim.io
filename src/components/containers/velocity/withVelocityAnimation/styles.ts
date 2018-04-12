import { StyleRulesCallback } from 'material-ui/styles';

export type WithVelocityAnimationStyles = 'container';
export const WithVelocityAnimationStyles: StyleRulesCallback<WithVelocityAnimationStyles> = (theme) => ({
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
