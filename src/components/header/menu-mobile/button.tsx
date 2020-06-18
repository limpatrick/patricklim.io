import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/MenuRounded';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { useMenuMobileActions } from './provider';

const Button = () => {
  const { open } = useMenuMobileActions();
  const { formatMessage } = useIntl();

  const titleOpenMenu = formatMessage({ id: 'global.title.open-menu' });

  return (
    <Tooltip title={titleOpenMenu} aria-label={titleOpenMenu}>
      <IconButton onClick={open} size="small">
        <MenuIcon />
      </IconButton>
    </Tooltip>
  );
};

export default Button;
