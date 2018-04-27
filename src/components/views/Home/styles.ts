import { StyleRules } from 'material-ui/styles';

export type HomeStyles = 'container' | 'title' | 'icon' | 'marginTop';
export const HomeStyles: StyleRules<HomeStyles> = {
  container: {
    height: '100%',
    minHeight: 'fit-content',
  },
  title: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: 100,
  },
  icon: {
    marginRight: 4,
    fontSize: 20,
  },
  marginTop: {
    marginTop: 75,
  },
};
