import { GatsbyLinkProps, Link as GatsbyLink } from 'gatsby';
import { IntlContextConsumer } from 'gatsby-plugin-intl';
import React from 'react';
import { IntlConfig } from 'react-intl';
import { getPath } from '~/utils/intl';

type Intl = {
  defaultLanguage: string;
  language: string;
  languages: string[];
  messages: IntlConfig['messages'];
  originalPath: string;
  redirect: boolean;
  routed: boolean;
};

type Props = Omit<GatsbyLinkProps<{}>, 'ref'> & { language?: string };

const CustomLink = React.forwardRef(
  ({ to, language, onClick, ...rest }: Props, ref: React.Ref<HTMLAnchorElement>) => (
    <IntlContextConsumer>
      {(intl: Intl) => {
        const languageLink = language || intl.language;
        const link = language ? getPath(languageLink, to) : `${to}`;

        return (
          <GatsbyLink
            {...rest}
            to={link}
            innerRef={ref}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              if (language) localStorage.setItem('gatsby-intl-language', language);
              if (onClick) onClick(e);
            }}
          />
        );
      }}
    </IntlContextConsumer>
  )
);

CustomLink.displayName = 'CustomLink';

export default CustomLink;
