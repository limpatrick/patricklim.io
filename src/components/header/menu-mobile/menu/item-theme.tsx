import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import DarkThemeIcon from '~/components/themes/dark-theme-icon';
import LightThemeIcon from '~/components/themes/light-theme-icon';
import { useConfig } from '~/providers/config';
import { useMenuMobileActions } from '../provider';
import Subheader from './subheader';

const ItemTheme = () => {
  const { close } = useMenuMobileActions();
  const [{ themeKey }, { toggleTheme }] = useConfig();
  const { formatMessage } = useIntl();

  return (
    <>
      <Subheader>{formatMessage({ id: 'global.theme' })}</Subheader>
      <ListItem
        button
        component="li"
        onClick={() => {
          close();
          toggleTheme();
        }}
      >
        <ListItemIcon>{themeKey === 'dark' ? <LightThemeIcon /> : <DarkThemeIcon />}</ListItemIcon>
        <ListItemText
          primary={formatMessage({
            id: `global.title.toggle-${themeKey === 'light' ? 'dark' : 'light'}`,
          })}
        />
      </ListItem>
    </>
  );
};

export default ItemTheme;
