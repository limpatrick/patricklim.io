import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    '& > .MuiGrid-root': {
      minHeight: '100vh',
      '&$containerFullScreen': {
        minHeight: 'calc(100vh - 95px)',
      },
    },
  },
  containerFullScreen: {},
});
