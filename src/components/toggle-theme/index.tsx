import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
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

  const titleToggle = formatMessage({
    id: `global.title.toggle-${themeKey === 'light' ? 'dark' : 'light'}`,
  });

  return (
    <Tooltip title={titleToggle} aria-label={titleToggle}>
      <IconButton onClick={toggleTheme} size="small">
        {themeKey === 'dark' ? <SunIcon /> : <MoonIcon className={classes.moon} />}
      </IconButton>
    </Tooltip>
  );
};

export default ToggleTheme;
