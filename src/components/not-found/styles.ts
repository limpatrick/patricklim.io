import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { MIN_HEIGHT_CALC_FULL_SCREEN } from '~/constants';

export default makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      minHeight: MIN_HEIGHT_CALC_FULL_SCREEN,
    },
    buttonWrapper: {
      marginTop: theme.spacing(4),
    },
  })
);
