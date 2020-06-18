import { GetTechnologiesLogoQuery } from '@generated/graphql-types';
import Grid from '@material-ui/core/Grid';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { ID_TECHNOLOGIES } from '~/constants';
import Article from '~/layouts/article';
import useStyles from './styles';

export const query = graphql`
  query GetTechnologiesLogo {
    allFile(
      filter: { sourceInstanceName: { eq: "technologies" } }
      sort: { fields: name, order: ASC }
    ) {
      nodes {
        childImageSharp {
          fixed(height: 50, grayscale: true) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
            originalName
          }
        }
        id
      }
    }
  }
`;

const Technologies = () => {
  const {
    allFile: { nodes },
  } = useStaticQuery<GetTechnologiesLogoQuery>(query);
  const { formatMessage } = useIntl();
  const classes = useStyles();

  return (
    <Article
      id={ID_TECHNOLOGIES}
      className={classes.root}
      title={formatMessage({ id: 'technologies.title' })}
    >
      <Grid container spacing={6}>
        {nodes.map(({ childImageSharp: { fixed: { originalName, ...fixed } }, id }) => (
          <Grid key={id} item xs={12} sm>
            <Img alt={originalName} fixed={fixed} />
          </Grid>
        ))}
      </Grid>
    </Article>
  );
};

export default Technologies;
