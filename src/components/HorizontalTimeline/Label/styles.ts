import { StyleRules } from 'material-ui/styles';

export type LabelStyles = 'container' | 'typography';
export const LabelStyles: StyleRules<LabelStyles> = {
  container: {
    position: 'absolute',
    top: 28,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'initial',
  },
  typography: {
    fontSize: '0.6rem',
    position: 'absolute',
  },
};
