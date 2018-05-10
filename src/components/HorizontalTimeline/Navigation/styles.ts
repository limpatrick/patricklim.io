import { StyleRules } from 'material-ui/styles';

export type NavigationStyles = 'tooltip' | 'iconButton';
export const NavigationStyles: StyleRules<NavigationStyles> = {
  tooltip: {
    zIndex: 3,
    minWidth: 50,
    minHeight: 50,
  },
  iconButton: {
    marginBottom: 2,
  },
};
