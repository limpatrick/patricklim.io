import { GetExperienceDataQuery } from '@generated/graphql-types';
import Grid from '@material-ui/core/Grid';
import Step from '@material-ui/core/Step';
import StepContent from '@material-ui/core/StepContent';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { graphql, useStaticQuery } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { ID_EXPERIENCE } from '~/constants';
import Article from '~/layouts/article';
import StepIcon from './step-icon';
import useStyles from './styles';

export const query = graphql`
  query GetExperienceData {
    allExperienceYaml {
      nodes {
        company
        end
        start
        title
        id
      }
    }
  }
`;

const Experience = () => {
  const {
    allExperienceYaml: { nodes },
  } = useStaticQuery<GetExperienceDataQuery>(query);
  const { formatMessage, formatDate } = useIntl();
  const classes = useStyles();

  return (
    <Article id={ID_EXPERIENCE} title={formatMessage({ id: 'experience.title' })}>
      <Stepper orientation="vertical">
        {nodes.map(({ company, id, end, start, title }) => (
          <Step key={id} active>
            <StepLabel StepIconComponent={StepIcon}>
              <Grid container component="span">
                <Grid item xs={12} sm={6} component="span">
                  <Typography
                    className={clsx(classes.title, classes.lineHeight)}
                    variant="subtitle1"
                    component="span"
                  >
                    {company}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} component="span">
                  <Grid container justify="flex-end" component="span">
                    <Grid item xs={12} sm={7} md={4} component="span">
                      <Typography variant="caption" component="span">
                        {formatDate(start, { month: 'short', year: 'numeric' })} –{' '}
                        {end
                          ? formatDate(end, { month: 'short', year: 'numeric' })
                          : formatMessage({ id: 'experience.present' })}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </StepLabel>
            <StepContent>
              <Typography variant="body2">{title}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Article>
  );
};

export default Experience;
