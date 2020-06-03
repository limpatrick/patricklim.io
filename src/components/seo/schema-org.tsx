import React from 'react';
import { Helmet } from 'react-helmet';
import { WebSite, WithContext } from 'schema-dts';

type Props = {
  alternateName: string;
  description: string;
  image: string;
  keywords: string;
  name: string;
  url: string;
};

const SchemaOrg = ({ alternateName, description, image, keywords, name, url }: Props) => {
  const schema: WithContext<WebSite> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    alternateName,
    description,
    image,
    keywords,
    name,
    url,
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SchemaOrg;
