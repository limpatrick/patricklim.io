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
      width: 'calc(100vw - 140px)',
    },
    overflowVisible: {
      height: 106,
      overflow: 'hidden',
      position: 'absolute',
      width: '100%',
      '& > $wrapper': {
        alignItems: 'flex-end',
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'center',
        position: 'absolute',
        '& > $content': {
          marginLeft: 70,
        },
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
