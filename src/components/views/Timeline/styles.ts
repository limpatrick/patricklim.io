import { StyleRules } from 'material-ui/styles';

export type TimelineStyles = 'canvasContainer' | 'canvasWrapper';
export const TimelineStyles: StyleRules<TimelineStyles> = {
  canvasContainer: {
    height: 'calc(100vh - 130px)',
    minHeight: 500,
    minWidth: 500,
  },
  canvasWrapper: {
    height: 'fill-available',
  },
};
