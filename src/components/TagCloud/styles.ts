import { StyleRulesCallback } from 'material-ui/styles';

export type TagCloudStyles = 'canvas';
export const TagCloudStyles: StyleRulesCallback<TagCloudStyles> = (theme) => ({
  canvas: {
    height: '100%',
    width: 'auto',
    margin: 'auto',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
});
