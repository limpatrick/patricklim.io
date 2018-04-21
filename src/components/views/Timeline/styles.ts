import { StyleRules } from 'material-ui/styles';

export type TimelineStyles = 'topContainer' | 'topContainerWrapper' | 'eventDescriptionContainer';
export const TimelineStyles: StyleRules<TimelineStyles> = {
  topContainer: {
    width: '100%',
  },
  topContainerWrapper: {
    minHeight: 'calc(100vh - 130px)',
  },
  eventDescriptionContainer: {
    maxWidth: 'fill-available',
  },
};
