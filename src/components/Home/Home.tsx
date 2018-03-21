import * as React from 'react';

import { WithStyles, withStyles } from 'material-ui/styles';
import styles, { HomeStyles } from './styles';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

interface HomeProps {}

class Home extends React.Component<HomeProps & WithStyles<HomeStyles>> {
  render() {
    const { classes } = this.props;

    return (
      <Grid className={classes.container} container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper} elevation={4}>
            <Typography variant="headline" component="h1">
              Patrick LIM
            </Typography>
            <Typography variant="subheading" component="p">
              Front end developer.
            </Typography>
            <Typography component="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quisquam, dolore ex cupiditate
              consequuntur itaque rerum ad aperiam sunt accusamus mollitia atque, necessitatibus nostrum omnis suscipit
              repellat distinctio nisi ipsa. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
              consequatur quasi laborum? Sequi ratione commodi neque labore earum reiciendis at quae odit recusandae.
              Minima vitae omnis ea totam iure praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus ducimus beatae voluptates voluptatem sint at animi ratione eligendi, laborum illum sed! Iusto
              vel ipsam odio accusamus soluta odit incidunt asperiores. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Recusandae, facilis dignissimos earum deleniti voluptates dolore aspernatur quisquam
              accusantium nihil, enim, sit doloremque. Debitis minus exercitationem perferendis eos doloribus et
              expedita.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper} elevation={4}>
            <Typography variant="headline" component="h1">
              Patrick LIM
            </Typography>
            <Typography variant="subheading" component="p">
              Front end developer.
            </Typography>
            <Typography component="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quisquam, dolore ex cupiditate
              consequuntur itaque rerum ad aperiam sunt accusamus mollitia atque, necessitatibus nostrum omnis suscipit
              repellat distinctio nisi ipsa. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
              consequatur quasi laborum? Sequi ratione commodi neque labore earum reiciendis at quae odit recusandae.
              Minima vitae omnis ea totam iure praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus ducimus beatae voluptates voluptatem sint at animi ratione eligendi, laborum illum sed! Iusto
              vel ipsam odio accusamus soluta odit incidunt asperiores. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Recusandae, facilis dignissimos earum deleniti voluptates dolore aspernatur quisquam
              accusantium nihil, enim, sit doloremque. Debitis minus exercitationem perferendis eos doloribus et
              expedita.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper} elevation={4}>
            <Typography variant="headline" component="h1">
              Patrick LIM
            </Typography>
            <Typography variant="subheading" component="p">
              Front end developer.
            </Typography>
            <Typography component="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quisquam, dolore ex cupiditate
              consequuntur itaque rerum ad aperiam sunt accusamus mollitia atque, necessitatibus nostrum omnis suscipit
              repellat distinctio nisi ipsa. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
              consequatur quasi laborum? Sequi ratione commodi neque labore earum reiciendis at quae odit recusandae.
              Minima vitae omnis ea totam iure praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus ducimus beatae voluptates voluptatem sint at animi ratione eligendi, laborum illum sed! Iusto
              vel ipsam odio accusamus soluta odit incidunt asperiores. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Recusandae, facilis dignissimos earum deleniti voluptates dolore aspernatur quisquam
              accusantium nihil, enim, sit doloremque. Debitis minus exercitationem perferendis eos doloribus et
              expedita.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Home);
