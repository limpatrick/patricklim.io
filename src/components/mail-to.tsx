import Link from '@material-ui/core/Link';
import React from 'react';
import useSiteMetadata from '~/hooks/use-site-metadata';

type Props = { color?: React.ComponentProps<typeof Link>['color'] };

const MailTo = ({ color }: Props) => {
  const { email, emailSubject } = useSiteMetadata();

  return (
    <Link color={color ?? 'inherit'} href={`mailto:${email}?subject=${emailSubject}`}>
      {email}
    </Link>
  );
};

export default MailTo;
