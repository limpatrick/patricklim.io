import { StyleRulesCallback, Theme } from 'material-ui/styles';

import background from 'src/assets/img/background.jpg';

const styles: StyleRulesCallback<AppStyles> = (theme: Theme) => ({
  wrapper: {
    position: 'relative',
    top: 0,
    height: '100vh',
  },
  content: {
    maxHeight: 'calc(100% - 64px)',
    zIndex: 4,
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
  background: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    position: 'absolute',
    zIndex: 1,
    '&:after': {
      backgroundColor: 'rgba(15, 51, 77, 0.5)',
      content: '""',
      height: '100%',
      left: 0,
      position: 'absolute',
      top: 0,
      width: '100%',
    },
  },
});

export type AppStyles = 'wrapper' | 'content' | 'container' | 'background';

export default styles;
