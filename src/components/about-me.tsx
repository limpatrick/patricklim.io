import Typography from '@material-ui/core/Typography';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import Article from '~/layouts/article';

const AboutMe = () => {
  const { formatMessage } = useIntl();

  return (
    <Article title={formatMessage({ id: 'about-me.title' })}>
      <Typography variant="body1" align="justify">
        {formatMessage({ id: 'about-me.text' })}
      </Typography>
    </Article>
  );
};

export default AboutMe;
