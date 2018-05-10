import { StyleRulesCallback } from 'material-ui/styles';

export type TimelineStyles = 'content' | 'overflowHidden' | 'overflowVisible' | 'wrapper' | 'container';
export const TimelineStyles: StyleRulesCallback<TimelineStyles> = (theme) => {
  const contentHeight = 50;

  return {
    container: {
      alignItems: 'flex-end',
      display: 'flex',
      flexDirection: 'row',
      height: '100%',
      justifyContent: 'center',
      width: 'calc(100vw - 140px)',
    },
    overflowHidden: {
      overflow: 'hidden',
      position: 'absolute',
      maxWidth: 'calc(100vw - 140px)',
    },
    overflowVisible: {
      height: 106,
      overflow: 'hidden',
      position: 'absolute',
      maxWidth: 'calc(100vw - 20px)',
      '& > $wrapper': {
        alignItems: 'flex-end',
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'center',
        position: 'relative',
        '& > $content': {
          margin: '0 60px',
        },
      },
      [theme.breakpoints.down('xs')]: {
        height: 122,
      },
    },
    content: {
      height: contentHeight,
      transition: theme.transitions.create('transform', {
        easing: theme.transitions.easing.easeOut,
      }),
    },
    wrapper: {},
  };
};
