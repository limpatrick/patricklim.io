import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import Link from '~/components/link';
import ToggleTheme from '~/components/toggle-theme';
import useScrollTo from '~/hooks/use-scroll-to';
import AppBar from '@material-ui/core/AppBar';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import useStyles from './styles';

const id = 'back-to-top-anchor';

type Props = { path: string };

const Header = ({ path }: Props) => {
  const classes = useStyles();
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
  const { scrollTo } = useScrollTo(id);
  const { formatMessage, locale } = useIntl();

  const getLink = (language: string) => {
    const text = language.toUpperCase();

    return locale !== language ? (
      <Link language={language} to={path} underline="none">
        {text}
      </Link>
    ) : (
      <Typography className={classes.activeLink} component="span" variant="body2">
        {text}
      </Typography>
    );
  };

  return (
    <>
      <AppBar id={id} className={classes.header} position="static" elevation={0}>
        <Toolbar>
          <Grid className={classes.actions} container justify="flex-end" alignItems="center">
            <Grid className={classes.links} item>
              {getLink('en')} / {getLink('fr')}
            </Grid>
            <Grid item>
              <ToggleTheme />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Zoom in={trigger}>
        <div className={classes.scrollButton} onClick={scrollTo} role="presentation">
          <Fab size="small" aria-label={formatMessage({ id: 'global.aria-label.back-top' })}>
            <KeyboardArrowUpIcon />
          </Fab>
        </div>
      </Zoom>
    </>
  );
};

export default Header;
