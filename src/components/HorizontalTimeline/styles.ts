import { StyleRules } from 'material-ui/styles';

export type HorizontalTimelineStyles = 'container';
export const HorizontalTimelineStyles: StyleRules<HorizontalTimelineStyles> = {
  container: {
    alignItems: 'flex-end',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};
