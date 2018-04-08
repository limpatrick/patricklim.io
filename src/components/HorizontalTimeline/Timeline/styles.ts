import { StyleRulesCallback } from 'material-ui/styles';

export type TimelineStyles = 'container' | 'wrapper';
export const TimelineStyles: StyleRulesCallback<TimelineStyles> = (theme) => ({
  container: {
    overflow: 'hidden',
  },
  wrapper: {
    position: 'relative',
    height: 50,
    transition: theme.transitions.create('transform', {
      easing: theme.transitions.easing.easeOut,
    }),
  },
});
