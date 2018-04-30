import * as React from 'react';

import Icon from 'react-icon-base';

interface LogoProps {}

const Logo: React.SFC<LogoProps> = (props) => (
  <Icon viewBox="0 0 207.32 351.77" {...props}>
    <g>
      <path
        d="M290.89,123.63q0,33.16-22.63,51t-64.75,17.85H177.82v85.89H152.43V60H209Q290.89,60,290.89,123.63ZM177.82,170.68h22.85q33.76,0,48.84-10.9t15.09-35q0-21.66-14.19-32.26T206.2,82H177.82Z"
        transform="translate(-152.43 -60)"
      />
      <path d="M238,411.77V205h25.4V388.72h96.35v23Z" transform="translate(-152.43 -60)" />
    </g>
  </Icon>
);

export default Logo;
