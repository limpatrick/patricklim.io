import { StyleRules } from 'material-ui/styles';

const styles: StyleRules<HomeStyles> = {
  container: {
    height: '100%',
    minHeight: 'fit-content',
  },
  typography: {
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: 100,
  },
  logo: {
    position: 'relative',
    top: -10,
  },
  divider: {
    padding: '0 !important',
    height: 50,
    border: '1px solid white',
  },
};

export type HomeStyles = 'container' | 'typography' | 'logo' | 'divider';

export default styles;
