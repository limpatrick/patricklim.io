import React from 'react';
import Skill from '~/components/skill';
import { skills } from '~/data/skills';
import Grid from '@material-ui/core/Grid';

const SkillSet = () => (
  <Grid container justify="flex-start" alignItems="center">
    {skills.map(skill => (
      <Grid key={skill.name} item xs={4} sm={3} md={2}>
        <Skill {...skill} />
      </Grid>
    ))}
  </Grid>
);

export default SkillSet;
