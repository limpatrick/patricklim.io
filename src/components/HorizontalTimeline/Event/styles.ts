import { StyleRulesCallback, Theme } from 'material-ui/styles';
import { primaryColor, secondaryColor } from 'src/theme';

import { IconButtonClassKey } from 'material-ui/IconButton';

const activeColor = secondaryColor;
const hoverColor = activeColor;
const olderColor = primaryColor;

export const eventWidth = 48;

export type EventStyles = 'typography' | 'icon' | 'active' | 'older' | IconButtonClassKey;
export const EventStyles: Partial<StyleRulesCallback<EventStyles>> = (theme: Theme) => {
  const colorTransition = theme.transitions.create('color', {
    duration: theme.transitions.duration.standard,
  });

  return {
    root: {
      position: 'absolute',
      left: 0,
      top: -10,
      width: eventWidth,
      zIndex: 2,
      '&:hover': {
        '& $icon': {
          color: hoverColor,
        },
      },
    },
    label: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    active: {
      '& $icon': {
        color: activeColor,
      },
    },
    older: {
      '& $icon': {
        color: olderColor,
      },
    },
    typography: {
      position: 'relative',
      transition: colorTransition,
    },
    icon: {
      position: 'relative',
      fontSize: '0.75rem',
      height: 'auto',
      color: 'rgb(200, 200, 200)',
      transition: colorTransition,
    },
  };
};
