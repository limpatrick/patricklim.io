import { StyleRules } from 'material-ui/styles';
import background from 'src/assets/img/background-2.jpg';

export type AppStyles = 'wrapper' | 'background';
export const AppStyles: StyleRules<AppStyles> = {
  wrapper: {
    position: 'relative',
    top: 0,
    height: '100vh',
    overflow: 'hidden',
    background: '#000',
  },
  background: {
    height: '100%',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    background: `url(${background})`,
  },
};
