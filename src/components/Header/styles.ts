import { StyleRules } from 'material-ui/styles';

export type HeaderStyles = 'appBar' | 'toolbar' | 'flex';
export const HeaderStyles: StyleRules<HeaderStyles> = {
  appBar: {
    position: 'relative',
    boxShadow: 'none',
    background: 'transparent',
  },
  toolbar: {
    justifyContent: 'flex-end',
  },
  flex: {
    flex: 1,
  },
};
