import Typography from '@material-ui/core/Typography';
import NoSignal from '@material-ui/icons/SignalCellularConnectedNoInternet0BarRounded';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import useStyles from './styles';

const Alert = () => {
  const { formatMessage } = useIntl();
  const classes = useStyles();

  return (
    <>
      <NoSignal className={classes.icon} />
      <Typography variant="body2">{formatMessage({ id: 'global.no-network' })}</Typography>
    </>
  );
};

export default Alert;
