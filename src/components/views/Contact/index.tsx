import * as React from 'react';

import withVelocity, { WithVelocityInjectedProps } from 'components/containers/withVelocity';

import Button from 'material-ui/Button';

interface ContactProps {}

const Contact: React.SFC<ContactProps & WithVelocityInjectedProps> = () => (
  <div>
    <Button variant="raised">Contact component</Button>
  </div>
);

export default withVelocity(Contact);
