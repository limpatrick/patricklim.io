import { StyleRulesCallback } from 'material-ui/styles';

export type TimelineStyles = 'topContainer' | 'topContainerWrapper' | 'eventDescriptionContainer';
export const TimelineStyles: StyleRulesCallback<TimelineStyles> = (theme) => ({
  topContainer: {
    width: '100%',
  },
  topContainerWrapper: {
    [theme.breakpoints.up('md')]: {
      minHeight: 'calc(100vh - 125px)',
    },
  },
  eventDescriptionContainer: {
    maxWidth: '100%',
  },
});
