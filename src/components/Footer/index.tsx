import * as React from 'react';
import * as moment from 'moment';

import { IoSocialGithub, IoSocialLinkedin } from 'react-icons/lib/io';
import { WithStyles, withStyles } from 'material-ui/styles';

import { FooterStyles } from './styles';
import IconLink from 'components/IconLink';
import Typography from 'material-ui/Typography';

interface FooterProps {}

const Footer: React.SFC<FooterProps & WithStyles<FooterStyles>> = ({ classes }) => (
  <footer className={classes.container}>
    <a href="https://github.com/limpatrick/patricklim.fr" target="_blank" className={classes.link}>
      <Typography variant="caption">Handmade by me © {moment().year()}</Typography>
    </a>
    <div className={classes.icons}>
      <IconLink href="https://github.com/limpatrick" target="_blank" title="github.com/limpatrick">
        <IoSocialGithub />
      </IconLink>
      <IconLink href="https://www.linkedin.com/in/lim-patrick/" target="_blank" title="linkedin.com/in/lim-patrick">
        <IoSocialLinkedin />
      </IconLink>
    </div>
  </footer>
);

export default withStyles(FooterStyles)(Footer);
