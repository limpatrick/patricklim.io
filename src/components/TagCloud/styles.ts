import { StyleRules } from 'material-ui/styles';

export type TagCloudStyles = 'canvasWrapper' | 'canvas';
export const TagCloudStyles: StyleRules<TagCloudStyles> = {
  canvasWrapper: {
    maxWidth: '100vw',
  },
  canvas: {
    width: '100%',
  },
};
