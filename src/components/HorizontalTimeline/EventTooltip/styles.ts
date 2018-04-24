import { StyleRules } from 'material-ui/styles';

export type EventTooltipStyles = 'content';
export const EventTooltipStyles: StyleRules<EventTooltipStyles> = {
  content: {
    position: 'absolute',
    left: 0,
    width: 'auto',
    zIndex: 2,
  }
};
