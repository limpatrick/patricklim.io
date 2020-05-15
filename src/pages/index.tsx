import React from 'react';
import SEO from '~/components/seo';
import SkillSet from '~/components/skill-set';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    intro: { border: '1px solid', minHeight: 'calc(100vh - 64px)' },
    skillSet: { border: '1px solid', minHeight: '100vh' },
    title: {
      fontFamily: '"Varela", "Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '3rem',
      fontWeight: 'bold',
      letterSpacing: '0.56rem',
      textAlign: 'center',
      textTransform: 'uppercase',
    },
    subtitle: {
      color: '#94a4ba',
      fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
      letterSpacing: '0.06rem',
      textAlign: 'center',
    },
    next: {
      position: 'absolute',
      bottom: theme.spacing(2),
    },
  })
);

const skillSetId = 'skill-set-section';

const IndexPage = () => {
  const classes = useStyles();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
      `#${skillSetId}`
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <>
      <SEO title="home" />
      <Grid
        className={classes.intro}
        container
        direction="column"
        justify="center"
        alignItems="center">
        <Grid item>
          <Typography className={classes.title} variant="h1" gutterBottom>
            patrick lim
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.subtitle} variant="subtitle1" component="p" gutterBottom>
            full stack developer
          </Typography>
        </Grid>
        <Box className={classes.next}>
          <IconButton aria-label="next" onClick={handleClick}>
            <ExpandMoreIcon />
          </IconButton>
        </Box>
      </Grid>
      <Container maxWidth="lg">
        <Grid
          id={skillSetId}
          className={classes.skillSet}
          container
          justify="center"
          alignItems="center">
          <SkillSet />
        </Grid>
      </Container>
    </>
  );
};

export default IndexPage;
