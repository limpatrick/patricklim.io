import IconButton from '@material-ui/core/IconButton';
import MoonIcon from '@material-ui/icons/Brightness2Sharp';
import SunIcon from '@material-ui/icons/WbSunnyRounded';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { useConfig } from '~/providers/config';
import useStyles from './styles';

const ToggleTheme = () => {
  const [{ themeKey }, { toggleTheme }] = useConfig();
  const { formatMessage } = useIntl();
  const classes = useStyles();

  return (
    <IconButton
      aria-label={formatMessage({
        id: `global.aria-label.toggle-${themeKey === 'light' ? 'dark' : 'light'}`,
      })}
      // TODO title
      title={formatMessage({
        id: `global.aria-label.toggle-${themeKey === 'light' ? 'dark' : 'light'}`,
      })}
      onClick={toggleTheme}
      size="small"
    >
      {themeKey === 'dark' ? <SunIcon /> : <MoonIcon className={classes.moon} />}
    </IconButton>
  );
};

export default ToggleTheme;
