import { StyleRulesCallback, Theme } from 'material-ui/styles';

import { Style } from 'material-ui/styles/createTypography';

export type WithMuiTypographyStyles = Style | 'caption' | 'button';
export const WithMuiTypographyStyles: StyleRulesCallback<WithMuiTypographyStyles> = (theme: Theme) => {
  const {
    body1,
    body2,
    button,
    caption,
    display1,
    display2,
    display3,
    display4,
    headline,
    subheading,
    title,
  } = theme.typography;

  return {
    body1,
    body2,
    button,
    caption,
    display1,
    display2,
    display3,
    display4,
    headline,
    subheading,
    title,
  };
};
