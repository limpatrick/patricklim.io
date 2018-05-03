import { StyleRulesCallback } from 'material-ui/styles';

export type TimelineStyles = 'eventDescriptionContainer' | 'tagCloudContainer' | 'width' | 'minHeight';
export const TimelineStyles: StyleRulesCallback<TimelineStyles> = (theme) => ({
  eventDescriptionContainer: {
    maxWidth: '100%',
  },
  tagCloudContainer: {
    display: 'flex',
    maxWidth: 'calc(100vw - 16px)',
  },
  width: {
    width: '100%',
  },
  minHeight: {
    [theme.breakpoints.up('md')]: {
      minHeight: 'calc(100vh - 210px)',
    },
  },
});
