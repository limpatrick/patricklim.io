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
      position: 'absolute',
      top: 0,
      width: 'max-content',
      transition: colorTransition,
    },
    icon: {
      position: 'absolute',
      top: 15,
      fontSize: '0.75rem',
      width: 'auto',
      height: 'auto',
      color: 'rgb(200, 200, 200)',
      transition: colorTransition,
    },
  };
};
