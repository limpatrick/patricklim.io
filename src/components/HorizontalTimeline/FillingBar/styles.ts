import { StyleRules } from 'material-ui/styles';

export type FillingBarStyles = 'container' | 'bar';
export const FillingBarStyles: StyleRules<FillingBarStyles> = {
  container: {
    position: 'relative',
    top: 22,
    zIndex: 1,
  },
  bar: {
    height: 2,
  },
};
