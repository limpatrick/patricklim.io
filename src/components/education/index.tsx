import { GetEducationDataQuery } from '@generated/graphql-types';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { graphql, useStaticQuery } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { ID_EDUCATION } from '~/constants';
import Article from '~/layouts/article';
import useStyles from './styles';

export const query = graphql`
  query GetEducationData {
    allEducationYaml {
      nodes {
        city
        country
        end
        id
        school
        start
      }
    }
  }
`;

const Education = () => {
  const {
    allEducationYaml: { nodes },
  } = useStaticQuery<GetEducationDataQuery>(query);
  const { formatMessage } = useIntl();
  const classes = useStyles();

  return (
    <Article id={ID_EDUCATION} title={formatMessage({ id: 'education.title' })}>
      <List>
        {nodes.map(({ city, country, end, id, start, school }) => (
          <React.Fragment key={id}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={
                  <Grid className={classes.titleContainer} container component="span">
                    <Grid item sm={12} md={7} component="span">
                      <Typography
                        className={clsx(classes.title, classes.lineHeight)}
                        variant="subtitle1"
                        component="span"
                      >
                        {formatMessage({ id: `education.${school}.program` })}
                      </Typography>
                    </Grid>
                    <Grid container justify="flex-end" item sm={12} md={5} component="span">
                      <Grid
                        className={clsx(classes.dates, classes.lineHeight)}
                        item
                        component="span"
                      >
                        <Typography
                          className={classes.lineHeight}
                          color="textSecondary"
                          variant="body2"
                        >{`${start} – ${end}`}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                }
                secondary={
                  <Typography color="textSecondary" variant="body1" component="span">
                    {formatMessage({ id: `education.${school}.school` })}, {city}, {country}
                  </Typography>
                }
              />
            </ListItem>
            <Divider variant="middle" component="li" />
          </React.Fragment>
        ))}
      </List>
    </Article>
  );
};

export default Education;
