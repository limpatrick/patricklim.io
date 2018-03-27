import { StyleRules } from 'material-ui/styles';
import background from 'src/assets/img/background-2.jpg';

export type BackgroundStyles = 'container' | 'background';
export const backgroundStyles: StyleRules<BackgroundStyles> = {
  container: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    position: 'absolute',
    zIndex: 1,
  },
  background: {
    height: '100%',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    background: `url(${background})`,
  },
};
