import { BackgroundQuery } from '@generated/graphql-types';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import { duration } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useReducer } from 'react';
import { ID_ABOUT_ME } from '~/constants';
import useScrollTo from '~/hooks/use-scroll-to';
import { textEntered } from './actions';
import reducer, { initialState } from './reducer';
import useStyles from './styles';

export const query = graphql`
  query Background {
    file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

const Home = () => {
  const [{ text1, text2, text3 }, dispatch] = useReducer(reducer, initialState);
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
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <Typography className={classes.title} variant="h2" component="h1" gutterBottom>
              <Slide
                direction="down"
                in
                timeout={{ enter: duration.complex }}
                onEntered={() => dispatch(textEntered('text1'))}
              >
                <span>patrick</span>
              </Slide>{' '}
              <Slide
                direction="up"
                in
                timeout={{ enter: duration.complex }}
                onEntered={() => dispatch(textEntered('text2'))}
              >
                <span>lim</span>
              </Slide>
            </Typography>
          </Grid>
          <Grid item>
            <Grow
              in={text1 && text2}
              timeout={{ enter: duration.complex }}
              onEntered={() => dispatch(textEntered('text3'))}
            >
              <Typography
                className={classes.subtitle}
                color="textSecondary"
                variant="overline"
                component="p"
              >
                {formatMessage({ id: 'home.subtitle' })}
              </Typography>
            </Grow>
          </Grid>
          <Slide direction="down" in={text3} timeout={{ enter: duration.complex }}>
            <Box id={ID_ABOUT_ME} className={classes.next}>
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
