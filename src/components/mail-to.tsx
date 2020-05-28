import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { ContactEmailQuery } from '@generated/graphql-types';
import Link from '@material-ui/core/Link';

export const query = graphql`
  query ContactEmail {
    site {
      siteMetadata {
        email
        emailSubject
      }
    }
  }
`;

type Props = { color?: React.ComponentProps<typeof Link>['color'] };

const MailTo = ({ color }: Props) => {
  const {
    site: {
      siteMetadata: { email, emailSubject },
    },
  } = useStaticQuery<ContactEmailQuery>(query);

  return (
    <Link color={color ?? 'inherit'} href={`mailto:${email}?subject=${emailSubject}`}>
      {email}
    </Link>
  );
};

export default MailTo;
