import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';

import { ContentStyles } from './styles';
import Scrollbars from 'react-custom-scrollbars';
import SwitchRoutes from 'components/SwitchRoutes';

interface ContentProps {}

const Content: React.SFC<ContentProps & WithStyles<ContentStyles>> = ({ classes }) => (
  <div className={classes.content}>
    <Scrollbars className={classes.scrollbars}>
      <SwitchRoutes />
    </Scrollbars>
  </div>
);

export default withStyles(ContentStyles)(Content);
