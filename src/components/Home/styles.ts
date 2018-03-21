import { StyleRulesCallback, Theme } from 'material-ui/styles';

const styles: StyleRulesCallback<HomeStyles> = (theme: Theme) => ({
  container: {
    height: '100%',
    minHeight: 'fit-content',
  },
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

export type HomeStyles = 'container' | 'paper';

export default styles;
