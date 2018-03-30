import { StyleRules } from 'material-ui/styles';

export type LogoStyles = 'logo' | 'letter';
export const LogoStyles: StyleRules<LogoStyles> = {
  logo: {
    color: 'white',
    fontSize: '40px',
    fontFamily: 'open sans',
    textAlign: 'center',
  },
  letter: {
    position: 'relative',
    '&:nth-child(2)': {
      top: 18,
      left: -12,
    },
  },
};
