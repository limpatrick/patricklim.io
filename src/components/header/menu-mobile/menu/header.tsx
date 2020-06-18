import { Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/CloseRounded';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import Logo from '../../logo';
import { useMenuMobileActions } from '../provider';

const Header = () => {
  const { close, closePromise } = useMenuMobileActions();
  const { formatMessage } = useIntl();

  return (
    <AppBar color="transparent" position="relative" elevation={0}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <Logo onClick={closePromise} />
          </Grid>
          <Grid container justify="flex-end" item xs>
            <IconButton
              color="inherit"
              onClick={close}
              aria-label={formatMessage({ id: 'global.title.close' })}
              size="small"
            >
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
