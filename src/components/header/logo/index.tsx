import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import { navigate } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import LogoIcon from '~/components/logo-icon';
import { ID_TOP } from '~/constants';
import useScrollTo from '~/hooks/use-scroll-to';
import { useConfigState } from '~/providers/config';
import useStyles from './styles';

type Props = { className?: string; onClick?: () => Promise<void> };

const Logo = ({ className, onClick }: Props) => {
  const { path } = useConfigState();
  const { scrollTo } = useScrollTo(ID_TOP);
  const { formatMessage } = useIntl();
  const classes = useStyles();

  return (
    <IconButton
      aria-label={formatMessage({
        id: path === '/' ? 'global.title.back-top' : 'global.title.back',
      })}
      className={clsx(classes.root, className)}
      disableRipple
      disableFocusRipple
      onClick={async () => {
        if (path === '/') {
          if (onClick) {
            await onClick();
            scrollTo();
          } else scrollTo();
        } else navigate('/');
      }}
    >
      <LogoIcon />
    </IconButton>
  );
};

export default Logo;
