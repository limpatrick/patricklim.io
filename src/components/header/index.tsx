import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import ButtonLink from '~/components/button-link';
import ToggleTheme from '~/components/toggle-theme';
import { BACK_TOP_ANCHOR_ID } from '~/constants';
import useScrollTo from '~/hooks/use-scroll-to';
import AppBar from '@material-ui/core/AppBar';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import useStyles from './styles';

type Props = { path: string };

const Header = ({ path }: Props) => {
  const classes = useStyles();
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
  const { scrollTo } = useScrollTo(BACK_TOP_ANCHOR_ID);
  const { formatMessage, locale } = useIntl();

  const getButtonLink = (language: string) => {
    const text = language.toUpperCase();

    return locale !== language ? (
      <ButtonLink language={language} to={path}>
        {text}
      </ButtonLink>
    ) : (
      <ButtonLink disabled>{text}</ButtonLink>
    );
  };

  return (
    <>
      <AppBar id={BACK_TOP_ANCHOR_ID} color="transparent" position="static" elevation={0}>
        <Toolbar>
          <Grid className={classes.actions} container justify="flex-end" alignItems="center">
            <Grid className={classes.links} item>
              {getButtonLink('en')}
              {getButtonLink('fr')}
            </Grid>
            <Grid item>
              <ToggleTheme />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Zoom in={trigger}>
        <div className={classes.scrollButton} onClick={scrollTo} role="presentation">
          <Fab
            color="primary"
            size="small"
            aria-label={formatMessage({ id: 'global.aria-label.back-top' })}>
            <KeyboardArrowUpIcon />
          </Fab>
        </div>
      </Zoom>
    </>
  );
};

export default Header;
