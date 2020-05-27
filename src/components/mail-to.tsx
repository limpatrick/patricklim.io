import React from 'react';
import Link from '@material-ui/core/Link';

type Props = { color?: React.ComponentProps<typeof Link>['color'] };

const MailTo = ({ color }: Props) => (
  <Link color={color ?? 'inherit'} href="mailto:contact@patricklim.fr">
    contact@patricklim.fr
  </Link>
);

export default MailTo;
