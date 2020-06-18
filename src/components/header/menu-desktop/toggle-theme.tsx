import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import DarkThemeIcon from '~/components/themes/dark-theme-icon';
import LightThemeIcon from '~/components/themes/light-theme-icon';
import { useConfig } from '~/providers/config';

const ToggleTheme = () => {
  const [{ themeKey }, { toggleTheme }] = useConfig();
  const { formatMessage } = useIntl();

  const titleToggle = formatMessage({
    id: `global.title.toggle-${themeKey === 'light' ? 'dark' : 'light'}`,
  });

  return (
    <Tooltip title={titleToggle} aria-label={titleToggle}>
      <IconButton onClick={toggleTheme} size="small">
        {themeKey === 'dark' ? <LightThemeIcon /> : <DarkThemeIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default ToggleTheme;
