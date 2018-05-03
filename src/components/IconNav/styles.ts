import { StyleRules } from 'material-ui/styles';
import { TooltipClassKey } from 'material-ui/Tooltip';
import { defaultColor } from 'src/theme';

export type IconNavStyles = 'navLink' | TooltipClassKey;
export const IconNavStyles: Partial<StyleRules<IconNavStyles>> = {
  navLink: {
    color: defaultColor,
    textDecoration: 'none',
    display: 'inline-flex',
    '& > *': {
      alignItems: 'center',
      display: 'inline-flex',
      flex: '0 0 auto',
      height: 48,
      justifyContent: 'center',
      padding: 0,
      textAlign: 'center',
      verticalAlign: 'middle',
      width: 48,
    },
  },
  tooltip: {
    margin: 0,
  },
};
