import { StyleRules } from 'material-ui/styles';

export type ContentStyles = 'content' | 'scrollbars';
export const ContentStyles: StyleRules<ContentStyles> = {
  content: {
    maxHeight: 'calc(100% - 64px)',
    height: '100%',
  },
  scrollbars: {
    minHeight: 'fill-available',
    zIndex: 4,
  },
};
