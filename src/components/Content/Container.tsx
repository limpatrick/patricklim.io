import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';

import { AnimationState } from 'src/redux/reducers/animation';
import { ContainerStyles } from './styles';
import Hidden from 'material-ui/Hidden';
import { StoreState } from 'src/redux/reducers';
import { VelocityComponent } from 'velocity-react';
import { connect } from 'react-redux';

interface ContainerProps {}

interface ContainerStateToProps {
  animation: AnimationState;
}

const mapStateToProps = (state: StoreState) => ({
  animation: state.animation,
});

const Container: React.SFC<ContainerProps & WithStyles<ContainerStyles> & ContainerStateToProps> = ({
  animation,
  children,
  classes,
}) => (
  <VelocityComponent animation={animation} duration={1000} delay={500} runOnMount>
    <Hidden className={classes.hidden} xsUp implementation="css">
      <div className={classes.container}>{children}</div>
    </Hidden>
  </VelocityComponent>
);

export default connect<ContainerStateToProps>(mapStateToProps)(withStyles(ContainerStyles)(Container));
