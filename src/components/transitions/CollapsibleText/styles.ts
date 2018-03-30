import { StyleRules } from 'material-ui/styles';
import { random } from 'lodash';

const keyframeGhost = `ghost-${random(1, 100)}`;
const keyframeSpace = `space-${random(1, 100)}`;

export type CollapsibleTextStyles = 'letter' | 'visible' | 'space' | 'ghost';
export const CollapsibleTextStyles: StyleRules<CollapsibleTextStyles> = {
  letter: {
    display: 'inline-block',
    '& > *': {
      display: 'inline-block',
    },
  },
  visible: {
    color: 'rgba(255, 255, 255, 1)',
  },
  space: {
    width: 13.42,
    animation: `${keyframeSpace} 1.5s ease-in-out`,
  },
  ghost: {
    animation: `${keyframeGhost} 3s ease-in-out`,
  },
  [`@keyframes ${keyframeSpace}`]: {
    from: {
      width: 0,
    },
    to: {
      width: 13.42,
    },
  },
  [`@keyframes ${keyframeGhost}`]: {
    from: {
      opacity: 0,
      maxWidth: 0,
    },
    to: {
      opacity: 1,
      maxWidth: '2em',
    },
  },
};
