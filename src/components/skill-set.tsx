import { graphql, useStaticQuery } from 'gatsby';
import { map } from 'ramda';
import React from 'react';
import Card from '~/components/card';
import Layout from '~/components/layout';
import Skill from '~/components/skill';
import { skills } from '~/data/skills';
import { propIsNil } from '~/utils/ramda';
import { getIconOrSrc } from '~/utils/skills';
import { GetImagesQuery } from '@generated/graphql-types';
import Grid from '@material-ui/core/Grid';

export const query = graphql`
  query GetImages {
    allFile(filter: { relativeDirectory: { eq: "skills" } }) {
      nodes {
        childImageSharp {
          fixed(height: 30, width: 30) {
            ...GatsbyImageSharpFixed
            originalName
          }
        }
      }
    }
  }
`;

type Props = { id: string };

const SkillSet = ({ id }: Props) => {
  const data = useStaticQuery<GetImagesQuery>(query);

  return (
    <Layout id={id}>
      <Card title="Techonologies">
        <Grid container justify="flex-start" alignItems="center">
          {map(({ name, active }) => {
            const args = getIconOrSrc(active, data);

            return !propIsNil('icon', args) || !propIsNil('src', args) ? (
              <Grid key={name} item xs={4} sm={3} md={2}>
                <Skill name={name} {...args} />
              </Grid>
            ) : null;
          }, skills)}
        </Grid>
      </Card>
    </Layout>
  );
};

export default SkillSet;
