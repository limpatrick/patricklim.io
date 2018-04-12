import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';
import withVelocityOnComplete, {
  WithVelocityOnCompleteInjectedProps,
  handler,
} from 'src/components/containers/velocity/withVelocityOnComplete';

import { ContentStyles } from './styles';
import Scrollbars from 'react-custom-scrollbars';
import SwitchRoutes from 'components/SwitchRoutes';

interface ContentProps {}

class Content extends React.Component<
  ContentProps & WithStyles<ContentStyles> & WithVelocityOnCompleteInjectedProps
> {
  constructor(props: ContentProps & WithStyles<ContentStyles> & WithVelocityOnCompleteInjectedProps) {
    super(props);

    const { onVelocityComplete } = this.props;

    onVelocityComplete(this.onVelocityComplete);
  }

  private scrollbars: Scrollbars;

  private onVelocityComplete = () => {
    if (this.scrollbars.getScrollTop() === 0) {
      this.scrollbars.scrollTop(1);
    }
  }

  componentWillUnmount() {
    handler.removeCallback(this.onVelocityComplete);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.content}>
        <Scrollbars
          className={classes.scrollbars}
          ref={(scrollbars) => {
            if (scrollbars) {
              this.scrollbars = scrollbars;
            }
          }}>
          <SwitchRoutes />
        </Scrollbars>
      </div>
    );
  }
}

export default withVelocityOnComplete(withStyles(ContentStyles)(Content));
