import { LinearProgressClassKey } from 'material-ui/Progress';
import { StyleRules } from 'material-ui/styles';
import { primaryColor } from 'src/theme';

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
    backgroundColor: primaryColor,
  },
  colorPrimary: {
    backgroundColor: 'rgba(0, 0, 0, 0.26)',
  },
};
