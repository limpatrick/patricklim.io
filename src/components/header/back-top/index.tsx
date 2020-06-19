import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { ID_TOP } from '~/constants';
import useScrollTo from '~/hooks/use-scroll-to';
import { useHeaderState } from '../provider';
import useStyles from './styles';

const BackTop = () => {
  const { trigger } = useHeaderState();
  const { scrollTo } = useScrollTo(ID_TOP);
  const { formatMessage } = useIntl();
  const classes = useStyles();

  const titleBackTop = formatMessage({ id: 'global.title.back-top' });

  return (
    <Zoom in={trigger}>
      <div className={classes.wrapper} onClick={scrollTo} role="presentation">
        <Tooltip title={titleBackTop} aria-label={titleBackTop}>
          <Fab color="default" size="small">
            <KeyboardArrowUpIcon />
          </Fab>
        </Tooltip>
      </div>
    </Zoom>
  );
};

export default BackTop;
