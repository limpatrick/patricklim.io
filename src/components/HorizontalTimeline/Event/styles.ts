import { StyleRules } from 'material-ui/styles';

export type EventStyles = 'container' | 'button';
export const EventStyles: StyleRules<EventStyles> = {
  container: {
    border: '1px solid brown',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fit-content',
    position: 'absolute',
    left: 0,
  },
  button: {
    fontSize: '0.75rem',
    width: 'auto',
    height: 'auto',
    zIndex: 2,
  },
};
