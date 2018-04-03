import { StyleRules } from 'material-ui/styles';

export type EventStyles = 'container' | 'typography' | 'button' | 'active' | 'older';
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
  typography: {
    position: 'absolute',
    top: 0,
    width: 'max-content',
  },
  button: {
    '&:hover': {
      color: 'red',
      background: 'red',
    },
    fontSize: '0.75rem',
    width: 'auto',
    height: 'auto',
    zIndex: 2,
    position: 'absolute',
    top: 16,
    transition: 'color 0.3s, background 0.3s',
  },
  active: {
    color: 'red',
  },
  older: {
    color: 'brown',
  },
};
