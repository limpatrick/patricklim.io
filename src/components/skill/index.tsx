import React, { useState } from 'react';
import { Skill as SkillType } from '~/data/skills';
import { Icon } from '@iconify/react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

type Props = SkillType;

const Skill = ({ name, default: dflt, active }: Props) => {
  const [{ icon, height, width }, setState] = useState(dflt);
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      justify="space-between"
      alignItems="center">
      <Box
        p={1}
        onMouseEnter={() => setState({ ...active })}
        onMouseLeave={() => setState({ ...dflt })}>
        <Grid className={classes.iconWrapper} container justify="center" alignItems="center" item>
          <Icon icon={icon} height={height} width={width} />
        </Grid>
        <Grid item>
          <Typography variant="overline">{name}</Typography>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Skill;
