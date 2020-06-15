import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import LogoIcon from '~/components/logo-icon';
import { ID_TOP } from '~/constants';
import useScrollTo from '~/hooks/use-scroll-to';
import useStyles from './styles';

type Props = { onClick?: () => Promise<undefined> };

const Logo = ({ onClick }: Props) => {
  const { scrollTo } = useScrollTo(ID_TOP);
  const classes = useStyles();

  return (
    <IconButton
      className={classes.root}
      disableRipple
      disableFocusRipple
      onClick={async e => {
        if (onClick) {
          await onClick();
          scrollTo(e);
        } else scrollTo(e);
      }}
    >
      <LogoIcon />
    </IconButton>
  );
};

export default Logo;
