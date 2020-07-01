import { GetExperienceDataQuery } from '@generated/graphql-types';
import Typography from '@material-ui/core/Typography';
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import { graphql, useStaticQuery } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { ID_EXPERIENCE } from '~/constants';
import Article from '~/layouts/article';
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
      <Timeline className={classes.timeline} align="alternate">
        {nodes.map(({ company, id, end, start, title }) => (
          <TimelineItem key={id}>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                {end
                  ? formatMessage(
                      { id: 'experience.period' },
                      {
                        start: formatDate(start, { month: 'short', year: 'numeric' }),
                        end: formatDate(end, { month: 'short', year: 'numeric' }),
                      }
                    )
                  : formatMessage(
                      { id: 'experience.since' },
                      { start: formatDate(start, { month: 'short', year: 'numeric' }) }
                    )}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography className={classes.title} variant="subtitle1" component="p">
                {company}
              </Typography>
              <Typography variant="body1">{formatMessage({ id: title })}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Article>
  );
};

export default Experience;
