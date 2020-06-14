import AppBar from '@material-ui/core/AppBar';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import {
  ID_ABOUT_ME,
  ID_CONTACT,
  ID_EDUCATION,
  ID_EXPERIENCE,
  ID_TECHNOLOGIES,
  ID_TOP,
} from '~/constants';
import useScrollTo from '~/hooks/use-scroll-to';
import { useConfigState } from '~/providers/config';
import ButtonScroll from './button-scroll';
import LanguageMenu from './language-menu';
import useStyles from './styles';
import ToggleTheme from './toggle-theme';

const Header = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
  const { scrollTo } = useScrollTo(ID_TOP);
  const { path } = useConfigState();
  const { formatMessage } = useIntl();

  const titleBackTop = formatMessage({ id: 'global.title.back-top' });

  return (
    <>
      <AppBar color={trigger ? 'primary' : 'transparent'} elevation={trigger ? 4 : 0}>
        <Toolbar>
          <Grid container justify="flex-end" alignItems="center">
            {path === '/' ? (
              <Grid item>
                <ButtonScroll id={ID_ABOUT_ME} intl="about-me.nav" />
                <ButtonScroll id={ID_EXPERIENCE} intl="experience.nav" />
                <ButtonScroll id={ID_TECHNOLOGIES} intl="technologies.nav" />
                <ButtonScroll id={ID_EDUCATION} intl="education.nav" />
                <ButtonScroll id={ID_CONTACT} intl="contact.nav" />
              </Grid>
            ) : null}
            <Grid item>
              <LanguageMenu />
            </Grid>
            <Grid item>
              <ToggleTheme />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Zoom in={trigger}>
        <div className={classes.scrollButton} onClick={scrollTo} role="presentation">
          <Tooltip title={titleBackTop} aria-label={titleBackTop}>
            <Fab color="primary" size="small">
              <KeyboardArrowUpIcon />
            </Fab>
          </Tooltip>
        </div>
      </Zoom>
    </>
  );
};

export default Header;
