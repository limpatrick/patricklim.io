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

export type ContainerStyles = 'hidden' | 'container';
export const containerStyles: StyleRulesCallback<ContainerStyles> = (theme: Theme) => ({
  hidden: {
    height: '100%',
    width: '100%',
  },
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
