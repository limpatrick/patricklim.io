import { makeStyles } from '@material-ui/core';
import { MIN_HEIGHT_CALC_FULL_SCREEN, MIN_WIDTH } from '~/constants';

export default makeStyles({
  main: {
    minHeight: MIN_HEIGHT_CALC_FULL_SCREEN,
    minWidth: MIN_WIDTH,
  },
});
