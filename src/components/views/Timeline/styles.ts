import { StyleRules } from 'material-ui/styles';

export type TimelineStyles = 'canvasWrapper' | 'leftSide' | 'rightSide' | 'timeline';
export const TimelineStyles: StyleRules<TimelineStyles> = {
  canvasWrapper: {
    minHeight: 'calc(100vh - 130px)',
  },
  leftSide: {
    maxWidth: 'fill-available',
  },
  rightSide: {
    flex: 'auto',
  },
  timeline: {
    marginTop: 16,
  },
};
