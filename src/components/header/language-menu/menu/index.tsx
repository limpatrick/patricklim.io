import MuiMenu from '@material-ui/core/Menu';
import MuiMenuItem from '@material-ui/core/MenuItem';
import { navigate } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useCallback } from 'react';
import { LS_GATSBY_INTL_LANGUAGE } from '~/constants';
import { getPath } from '~/helpers/intl';
import { upperFirst } from '~/helpers/ramda';
import useSiteMetadata from '~/hooks/use-site-metadata';
import { useConfigState } from '~/providers/config';
import { LanguageCode } from '~/typings/global';
import useStyles from './styles';

type Props = {
  anchorEl: HTMLElement | null;
  onClose: () => void;
};

const Menu = ({ anchorEl, onClose }: Props) => {
  const { languages } = useSiteMetadata();
  const classes = useStyles();
  const { formatMessage, locale } = useIntl();
  const { path } = useConfigState();

  const handleClose = useCallback(
    (language: LanguageCode) => () => {
      localStorage.setItem(LS_GATSBY_INTL_LANGUAGE, language);

      navigate(getPath(language, path ?? '/'));
    },
    [path]
  );

  return (
    <MuiMenu
      id="simple-menu"
      className={classes.root}
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={onClose}
    >
      {languages.map(language => (
        <MuiMenuItem key={language} onClick={handleClose(language)} selected={language === locale}>
          {upperFirst(formatMessage({ id: `global.language.${language}` }))}
        </MuiMenuItem>
      ))}
    </MuiMenu>
  );
};

export default Menu;
