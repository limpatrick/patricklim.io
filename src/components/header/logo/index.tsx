import IconButton from '@material-ui/core/IconButton';
import { navigate } from 'gatsby';
import React from 'react';
import LogoIcon from '~/components/logo-icon';
import { ID_TOP } from '~/constants';
import useScrollTo from '~/hooks/use-scroll-to';
import { useConfigState } from '~/providers/config';
import useStyles from './styles';

type Props = { onClick?: () => Promise<undefined> };

const Logo = ({ onClick }: Props) => {
  const { path } = useConfigState();
  const { scrollTo } = useScrollTo(ID_TOP);
  const classes = useStyles();

  return (
    <IconButton
      className={classes.root}
      disableRipple
      disableFocusRipple
      onClick={async e => {
        if (path === '/') {
          if (onClick) {
            await onClick();
            scrollTo(e);
          } else scrollTo(e);
        } else navigate('/');
      }}
    >
      <LogoIcon />
    </IconButton>
  );
};

export default Logo;
