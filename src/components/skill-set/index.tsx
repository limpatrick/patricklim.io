import React from 'react';
import Skill from '~/components/skill';
import { skills } from '~/data/skills';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';

const SkillSet = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      justify="flex-start"
      alignItems="center">
      {skills.map(skill => (
        <Grid key={skill.name} item xs={4} sm={3} md={2}>
          <Skill {...skill} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SkillSet;
