import { StyleRules } from 'material-ui/styles';

export type TimelineStyles = 'container' | 'wrapper';
export const TimelineStyles: StyleRules<TimelineStyles> = {
  container: {
    border: '1px solid blue',
    overflow: 'hidden',
  },
  wrapper: {
    border: '1px solid cyan',
    position: 'relative',
    height: 50,
    transition: 'transform 0.4s',
  },
};
