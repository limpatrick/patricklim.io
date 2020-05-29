import { GetImagesQuery } from '@generated/graphql-types';
import { Icon } from '@iconify/react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Img from 'gatsby-image';
import React from 'react';
import { IconType } from '~/data/skills';
import useStyles from './styles';

type Props = { name: string } & Partial<IconType> & {
    src?: GetImagesQuery['allFile']['nodes'][0]['childImageSharp']['fixed'];
  };

const Skill = ({ name, icon, height, width, src }: Props) => {
  const classes = useStyles();

  if (!icon && !src) throw new Error('No icon or src');

  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      justify="space-between"
      alignItems="center"
    >
      <Box p={1}>
        <Grid className={classes.iconWrapper} container justify="center" alignItems="center" item>
          {icon !== undefined ? (
            <Icon icon={icon} height={height} width={width} />
          ) : (
            <Img fixed={src} title={name} alt={name} />
          )}
        </Grid>
        <Grid item>
          <Typography variant="overline">{name}</Typography>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Skill;
