import { StyleRules } from 'material-ui/styles';
import { TooltipClassKey } from 'material-ui/Tooltip';

export type EventTooltipStyles = 'content' | TooltipClassKey;
export const EventTooltipStyles: Partial<StyleRules<EventTooltipStyles>> = {
  tooltip: {
    textAlign: 'center',
  },
  content: {
    position: 'absolute',
    left: 0,
    width: 'auto',
    zIndex: 2,
  }
};
