import { StyleRules } from 'material-ui/styles';

const styles: StyleRules<LogoStyles> = {
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

export type LogoStyles = 'logo' | 'letter';

export default styles;
