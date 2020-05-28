import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import useStyles from './styles';

type Props = { children: React.ReactNode; title: string };

const CustomCard = ({ children, title }: Props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={4}>
      <CardHeader title={title} />
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default CustomCard;
