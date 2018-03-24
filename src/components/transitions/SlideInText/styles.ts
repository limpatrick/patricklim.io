import { StyleRules } from 'material-ui/styles';
import { random } from 'lodash';

const keyframeSlideInLeft = `slideIn-left-${random(1, 100)}`;
const keyframeSlideInRight = `slideIn-right-${random(1, 100)}`;

const styles: StyleRules<SlideInTextStyles> = {
  container: {
    overflow: 'hidden',
    textAlign: 'center',
  },
  slideInFromLeft: {
    animation: `${keyframeSlideInLeft} 2s ease-out`,
  },
  slideInFromRight: {
    animation: `${keyframeSlideInRight} 2s ease-out`,
  },
  [`@keyframes ${keyframeSlideInLeft}`]: {
    from: {
      marginLeft: '-100vw',
    },
    to: {
      marginLeft: 0,
    },
  },
  [`@keyframes ${keyframeSlideInRight}`]: {
    from: {
      marginRight: '-100vw',
    },
    to: {
      marginRight: 0,
    },
  },
};

export type SlideInTextStyles = 'container' | 'slideInFromLeft' | 'slideInFromRight';

export default styles;
