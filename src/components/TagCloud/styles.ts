import { StyleRules } from 'material-ui/styles';

export type TagCloudStyles = 'paper' | 'container';
export const TagCloudStyles: StyleRules<TagCloudStyles> = {
  paper: {
    background: 'transparent',
  },
  container: {
    width: '100%',
  },
};
