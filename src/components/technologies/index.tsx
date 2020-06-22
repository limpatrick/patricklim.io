import { GetTechnologiesLogoQuery } from '@generated/graphql-types';
import Grid from '@material-ui/core/Grid';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { useIntl } from 'gatsby-plugin-intl';
import { findIndex, path, pathEq, reduce, update } from 'ramda';
import React, { useMemo } from 'react';
import { ID_TECHNOLOGIES } from '~/constants';
import Article from '~/layouts/article';
import { useConfigState } from '~/providers/config';
import { ThemeKey } from '~/providers/config/themes';
import useStyles from './styles';

export const query = graphql`
  query GetTechnologiesLogo {
    light: allFile(
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
    dark: allFile(
      filter: { sourceInstanceName: { eq: "technologies-dark" } }
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

const getNodes = (
  data: GetTechnologiesLogoQuery,
  themeKey: ThemeKey
): GetTechnologiesLogoQuery['light']['nodes'] => {
  if (themeKey === 'dark') {
    const originalNamePath = ['childImageSharp', 'fixed', 'originalName'];

    return reduce(
      (acc, elem) => {
        const index = findIndex(pathEq(originalNamePath, path(originalNamePath, elem)), acc);

        return index !== -1 ? update(index, elem, acc) : acc;
      },
      data.light.nodes,
      data.dark.nodes
    );
  }

  return data.light.nodes;
};

const Technologies = () => {
  const data = useStaticQuery<GetTechnologiesLogoQuery>(query);
  const { themeKey } = useConfigState();
  const { formatMessage } = useIntl();
  const classes = useStyles();

  const nodes = useMemo(() => getNodes(data, themeKey), [data, themeKey]);

  return (
    <Article
      id={ID_TECHNOLOGIES}
      className={classes.root}
      title={formatMessage({ id: 'technologies.title' })}
    >
      <Grid className={classes.container} container>
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
