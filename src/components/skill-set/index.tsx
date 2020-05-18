import React from 'react';
import Skill from '~/components/skill';
import { skills } from '~/data/skills';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';

type Props = { id: string };

const SkillSet = ({ id }: Props) => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid id={id} container justify="center" alignItems="center">
        <Grid container justify="flex-start" alignItems="center">
          {skills.map(skill => (
            <Grid key={skill.name} item xs={4} sm={3} md={2}>
              <Skill {...skill} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default SkillSet;
