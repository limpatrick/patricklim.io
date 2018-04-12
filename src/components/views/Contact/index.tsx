import * as React from 'react';

import Button from 'material-ui/Button';
import withVelocityAnimation from 'components/containers/velocity/withVelocityAnimation';

interface ContactProps {}

const Contact: React.SFC<ContactProps> = () => (
  <div>
    <Button variant="raised">Contact component</Button>
  </div>
);

export default withVelocityAnimation(Contact);
