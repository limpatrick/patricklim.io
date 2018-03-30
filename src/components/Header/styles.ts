import { StyleRules } from 'material-ui/styles';

export type HeaderStyles = 'appBar' | 'toolbar';
export const HeaderStyles: StyleRules<HeaderStyles> = {
  appBar: {
    position: 'relative',
    boxShadow: 'none',
    background: 'transparent',
  },
  toolbar: {
    justifyContent: 'flex-end',
  },
};

export type HeaderLinkStyles = 'navLink' | 'button';
export const HeaderLinkStyles: StyleRules<HeaderLinkStyles> = {
  navLink: {
    textDecoration: 'none',
  },
  button: {
    textTransform: 'none',
    fontWeight: 100,
  },
};
