import { makeStyles } from '@material-ui/core';

export default makeStyles({
  timeline: {
    '& .MuiTimelineContent-root': {
      paddingTop: 0,
    },
    '& .MuiTimelineOppositeContent-root': {
      paddingTop: 4,
    },
  },
  title: {
    fontWeight: 500,
  },
});
