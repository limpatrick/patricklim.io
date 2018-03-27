import { StyleRules, StyleRulesCallback, Theme } from 'material-ui/styles';

export type ContentStyles = 'content' | 'scrollbars';
export const contentStyles: StyleRules<ContentStyles> = {
  content: {
    maxHeight: 'calc(100% - 64px)',
  },
  scrollbars: {
    minHeight: 'fill-available',
    zIndex: 4,
  },
};

export type ContainerStyles = 'container';
export const containerStyles: StyleRulesCallback<ContainerStyles> = (theme: Theme) => ({
  container: {
    height: '100%',
    paddingRight: 24,
    paddingLeft: 24,
    [theme.breakpoints.down('xs')]: {
      paddingRight: 16,
      paddingLeft: 16,
    },
  },
});
