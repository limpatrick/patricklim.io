import { BackgroundQuery } from '@generated/graphql-types';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import { duration } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useState } from 'react';
import Typist from 'react-typist';
import { ID_ABOUT_ME } from '~/constants';
import useScrollTo from '~/hooks/use-scroll-to';
import useSiteMetadata from '~/hooks/use-site-metadata';
import useStyles from './styles';

export const query = graphql`
  query Background {
    file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(quality: 100, jpegQuality: 100, webpQuality: 100, maxWidth: 6000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const Home = () => {
  const [typingDone, setTypingDone] = useState(false);
  const { author } = useSiteMetadata();
  const classes = useStyles();
  const { scrollTo } = useScrollTo(ID_ABOUT_ME);
  const { formatMessage } = useIntl();
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery<BackgroundQuery>(query);
  const titleContinue = formatMessage({ id: 'global.title.continue' });

  return (
    <Box className={classes.root}>
      <BackgroundImage fluid={fluid}>
        <Grid container justify="center" alignItems="center">
          <Typist cursor={{ show: false }} onTypingDone={() => setTypingDone(true)}>
            <Grid item>
              <Typography component="h1" gutterBottom variant="h2">
                {author}
              </Typography>
            </Grid>
            <Typist.Delay ms={duration.complex} />
            <Grid item>
              <Typography color="textSecondary" component="p" variant="overline">
                {formatMessage({ id: 'home.subtitle' })}
              </Typography>
            </Grid>
          </Typist>
          <Slide direction="down" in={typingDone} timeout={{ enter: duration.complex }}>
            <Box className={classes.next}>
              <Tooltip title={titleContinue} aria-label={titleContinue}>
                <IconButton onClick={scrollTo}>
                  <ExpandMoreIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Slide>
        </Grid>
      </BackgroundImage>
    </Box>
  );
};

export default Home;
