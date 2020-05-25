import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { toggleTheme, useConfig } from '~/components/config';
import IconButton from '@material-ui/core/IconButton';
import Brightness2RoundedIcon from '@material-ui/icons/Brightness2Rounded';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';

const ToggleTheme = () => {
  const [{ themeKey }, dispatch] = useConfig();
  const { formatMessage } = useIntl();

  return (
    <IconButton
      aria-label={formatMessage({
        id: `global.aria-label.toggle-${themeKey === 'light' ? 'dark' : 'light'}`,
      })}
      // TODO title
      title={formatMessage({
        id: `global.aria-label.toggle-${themeKey === 'light' ? 'dark' : 'light'}`,
      })}
      onClick={() => dispatch(toggleTheme())}
      size="small">
      {themeKey === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2RoundedIcon />}
    </IconButton>
  );
};

export default ToggleTheme;
