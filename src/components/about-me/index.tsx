import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { ID_ABOUT_ME } from '~/constants';
import useSections from '~/hooks/use-sections';
import Article from '~/layouts/article';
import useStyles from './styles';

const AboutMe = () => {
  const { scrollToContact } = useSections();
  const { formatMessage } = useIntl();
  const classes = useStyles();

  return (
    <Article
      id={ID_ABOUT_ME}
      className={classes.root}
      title={formatMessage({ id: 'about-me.title' })}
    >
      <>
        <Typography variant="body1" align="justify" gutterBottom>
          {formatMessage(
            { id: 'about-me.text1' },
            { dev: <strong>{formatMessage({ id: 'about-me.dev' })}</strong> }
          )}
        </Typography>
        <Typography variant="body1" align="justify">
          {formatMessage(
            { id: 'about-me.text2' },
            {
              react: <strong>{formatMessage({ id: 'about-me.react' })}</strong>,
              serverless: <strong>{formatMessage({ id: 'about-me.serverless' })}</strong>,
              contact: (
                <Button
                  className={classes.button}
                  component="span"
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  onClick={scrollToContact}
                >
                  {formatMessage({ id: 'about-me.contact' })}
                </Button>
              ),
            }
          )}
        </Typography>
      </>
    </Article>
  );
};

export default AboutMe;
