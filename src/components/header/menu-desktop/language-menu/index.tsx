import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useState } from 'react';
import Menu from './menu';
import useStyles from './styles';

const LanguageMenu = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const { formatMessage, locale } = useIntl();
  const classes = useStyles();

  const titleChangeLanguage = formatMessage({ id: 'global.title.change-language' });

  return (
    <>
      <Tooltip title={titleChangeLanguage} aria-label={titleChangeLanguage}>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          className={classes.button}
          onClick={event => {
            setAnchorEl(event.currentTarget);
          }}
          endIcon={<ExpandMoreIcon />}
        >
          {locale}
        </Button>
      </Tooltip>
      <Menu anchorEl={anchorEl} onClose={() => setAnchorEl(null)} />
    </>
  );
};

export default LanguageMenu;
