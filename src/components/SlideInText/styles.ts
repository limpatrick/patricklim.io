import { StyleRulesCallback, Theme } from 'material-ui/styles';

import { Style } from 'material-ui/styles/createTypography';
import { random } from 'lodash';

const keyframeSlideInLeft = `slideIn-left-${random(1, 100)}`;
const keyframeSlideInRight = `slideIn-right-${random(1, 100)}`;

const styles: StyleRulesCallback<SlideInTextStyles> = (theme: Theme) => {
  const {
    body1,
    body2,
    button,
    caption,
    display1,
    display2,
    display3,
    display4,
    headline,
    subheading,
    title,
  } = theme.typography;

  return {
    body1,
    body2,
    button,
    caption,
    display1,
    display2,
    display3,
    display4,
    headline,
    subheading,
    title,
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
};

export type SlideInTextStyles = Style | 'caption' | 'button' | 'container' | 'slideInFromLeft' | 'slideInFromRight';

export default styles;
