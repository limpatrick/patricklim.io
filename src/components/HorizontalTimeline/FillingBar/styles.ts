import { LinearProgressClassKey } from 'material-ui/Progress';
import { StyleRules } from 'material-ui/styles';

export type FillingBarStyles = 'container' | LinearProgressClassKey;
export const FillingBarStyles: Partial<StyleRules<FillingBarStyles>> = {
  container: {
    position: 'relative',
    top: 22,
    zIndex: 1,
  },
  root: {
    height: 2,
  },
  barColorPrimary: {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
  colorPrimary: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
};
