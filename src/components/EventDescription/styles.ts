import { StyleRules } from 'material-ui/styles';
import { primaryColor } from 'src/theme';

export type EventDescriptionStyles = 'title' | 'highlight' | 'chip' | 'opacity';
export const EventDescriptionStyles: StyleRules<EventDescriptionStyles> = {
  title: {
    fontWeight: 900,
  },
  highlight: {
    color: primaryColor,
  },
  chip: {
    margin: '0 5px',
    fontSize: '0.75rem',
    height: 27,
  },
  opacity: {
    opacity: 0,
  },
};
