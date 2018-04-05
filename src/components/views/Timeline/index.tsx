import * as React from 'react';

import withVelocity, { WithVelocityInjectedProps } from 'components/containers/withVelocity';

import HorizontalTimeline from 'components/HorizontalTimeline';

interface TimelineProps {}

const Timeline: React.SFC<TimelineProps & WithVelocityInjectedProps> = ({ onVelocityComplete }) => (
  <HorizontalTimeline onVelocityComplete={onVelocityComplete} />
);

export default withVelocity(Timeline);
