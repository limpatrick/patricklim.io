import { StyleRulesCallback, Theme } from 'material-ui/styles';

import { IconButtonClassKey } from 'material-ui/IconButton';

const activeColor = 'rgb(255, 255, 255)';
const hoverColor = activeColor;
const olderColor = 'rgb(200, 200, 200)';

export type EventStyles = 'typography' | 'icon' | 'active' | 'older' | IconButtonClassKey;
export const EventStyles: Partial<StyleRulesCallback<EventStyles>> = (theme: Theme) => {
  const colorTransition = theme.transitions.create('color', {
    duration: theme.transitions.duration.standard,
  });

  return {
    root: {
      position: 'absolute',
      left: 0,
      top: -11,
      width: 'auto',
      zIndex: 2,
      '&:hover': {
        '& $typography': {
          color: hoverColor,
        },
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
      '& $typography': {
        color: activeColor,
      },
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
