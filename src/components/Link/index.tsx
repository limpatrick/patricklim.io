import * as React from 'react';

interface LinkProps {
  href: string;
  target?: string;
}

const Link: React.SFC<LinkProps> = (props) => <a {...props} />;

export default Link;
