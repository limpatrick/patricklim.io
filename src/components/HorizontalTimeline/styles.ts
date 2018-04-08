import { StyleRules } from 'material-ui/styles';

export type HorizontalTimelineStyles = 'container';
export const HorizontalTimelineStyles: StyleRules<HorizontalTimelineStyles> = {
  container: {
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
};
