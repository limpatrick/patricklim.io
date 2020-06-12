import Button, { ButtonProps } from '@material-ui/core/Button';
import React from 'react';
import CustomLink from './custom-link';

type Props = ButtonProps & Partial<React.ComponentProps<typeof CustomLink>>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ButtonLink = React.forwardRef<any, Props>(({ to, ...props }, ref) =>
  to ? (
    <Button component={CustomLink} {...props} to={to} ref={ref} />
  ) : (
    <Button {...props} ref={ref} />
  )
);

export default ButtonLink;
