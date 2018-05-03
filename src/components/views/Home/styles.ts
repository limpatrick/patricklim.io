import { StyleRules } from 'material-ui/styles';
import { primaryColor } from 'src/theme';

export type HomeStyles = 'container' | 'bold' | 'light' | 'icon' | 'marginTop' | 'highlight';
export const HomeStyles: StyleRules<HomeStyles> = {
  container: {
    minHeight: 'inherit',
  },
  bold: {
    fontWeight: 900,
  },
  light: {
    fontWeight: 100,
  },
  icon: {
    marginRight: 4,
    fontSize: 20,
  },
  marginTop: {
    marginTop: 75,
  },
  highlight: {
    color: primaryColor,
    fontFamily: 'source code pro',
    fontWeight: 400,
  },
};
