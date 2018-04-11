import { Omit } from 'material-ui';
import { fontFamily } from 'src/theme';
import { join } from 'lodash';

export type Options = Omit<typeof TagCanvas.options, 'z0' | 'z1' | 'z2'>;
export const Options: Partial<Options> = {
  depth: 0.8,
  fadeIn: 3000,
  freezeActive: true,
  freezeDecel: true,
  initial: [1, 0],
  maxSpeed: 0.025,
  minSpeed: 0.01,
  noSelect: true,
  pinchZoom: true,
  shape: 'sphere',
  shuffleTags: true,
  textColour: '#fff',
  textFont: join(fontFamily, ', '),
  weight: true,
  weightFrom: 'data-weight',
};
