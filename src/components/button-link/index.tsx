import React from 'react';
import Button, { ButtonProps } from '@material-ui/core/Button';
import CustomLink from './custom-link';

type Props = ButtonProps & Partial<React.ComponentProps<typeof CustomLink>>;

const ButtonLink = ({ to, ...props }: Props) =>
  to ? <Button component={CustomLink} {...props} to={to} /> : <Button {...props} />;

export default ButtonLink;
