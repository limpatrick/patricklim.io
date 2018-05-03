import { Omit } from 'material-ui';
import { fontFamily } from 'src/theme';
import { join } from 'lodash';
import { primaryColor } from 'src/theme';

export type Options = Omit<typeof TagCanvas.options, 'z0' | 'z1' | 'z2'>;
export const Options: Partial<Options> = {
  depth: 0.8,
  fadeIn: 3000,
  freezeActive: true,
  freezeDecel: true,
  initial: [0.6, -0.3],
  maxSpeed: 0.05,
  minSpeed: 0.05,
  noSelect: true,
  pinchZoom: true,
  shape: 'sphere',
  shuffleTags: true,
  textColour: primaryColor,
  textFont: `source code pro, ${join(fontFamily, ', ')}`,
  weight: true,
  weightFrom: 'data-weight',
  zoom: 0.6,
};
