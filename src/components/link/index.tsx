import React from 'react';
import MuiLink, { LinkProps } from '@material-ui/core/Link';
import CustomLink from './custom-link';

type Props = LinkProps & Partial<React.ComponentProps<typeof CustomLink>>;

const Link = ({ to, ...props }: Props) =>
  to ? <MuiLink component={CustomLink} {...props} to={to} /> : <MuiLink {...props} />;

export default Link;
