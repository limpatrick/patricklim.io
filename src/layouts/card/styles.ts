import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > .MuiCardHeader-root': {
        borderBottom: `1px solid ${
          theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'
        }`,
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        '& .MuiCardHeader-title': {
          fontSize: '2.5rem',
          textAlign: 'center',
          fontWeight: 500,
        },
      },
    },
  })
);
