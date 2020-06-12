import Button from '@material-ui/core/Button';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import useScrollTo from '~/hooks/use-scroll-to';
import useStyles from './styles';

type Props = { id: string; intl: string };

const ButtonScroll = ({ id, intl }: Props) => {
  const { formatMessage } = useIntl();
  const classes = useStyles();
  const { scrollTo } = useScrollTo(id);

  return (
    <Button className={classes.root} onClick={scrollTo}>
      {formatMessage({ id: intl })}
    </Button>
  );
};

export default ButtonScroll;
