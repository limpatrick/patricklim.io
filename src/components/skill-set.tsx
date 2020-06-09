import { GetImagesQuery } from '@generated/graphql-types';
import Grid from '@material-ui/core/Grid';
import { graphql, useStaticQuery } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import { map } from 'ramda';
import React from 'react';
import Skill from '~/components/skill';
import { ID_TECHNOLOGIES } from '~/constants';
import { skills } from '~/data/skills';
import { propIsNil } from '~/helpers/ramda';
import { getIconOrSrc } from '~/helpers/skills';
import Card from '~/layouts/card';
import Container from '~/layouts/container';

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

const SkillSet = () => {
  const data = useStaticQuery<GetImagesQuery>(query);
  const { formatMessage } = useIntl();

  return (
    <>
      <div id={ID_TECHNOLOGIES} />
      <Container>
        <Card title={formatMessage({ id: 'skill-set.title' })}>
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
      </Container>
    </>
  );
};

export default SkillSet;
