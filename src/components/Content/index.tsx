import * as React from 'react';

import { ContentStyles, contentStyles } from './styles';
import { WithStyles, withStyles } from 'material-ui/styles';

import Container from './Container';
import Scrollbars from 'react-custom-scrollbars';
import SwitchRoutes from 'components/SwitchRoutes';

interface ContentProps {}

const Content: React.SFC<ContentProps & WithStyles<ContentStyles>> = ({ classes }) => (
  <div className={classes.content}>
    <Scrollbars className={classes.scrollbars}>
      <SwitchRoutes componentContainer={Container} />
    </Scrollbars>
  </div>
);

export default withStyles(contentStyles)(Content);
