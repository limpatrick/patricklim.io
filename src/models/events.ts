import * as moment from 'moment';

export interface EventData {
  date: moment.Moment;
}

// export const events: EventData[] = [
//   {
//     date: moment('15/03/2018', 'DD/MM/YYYY'),
//   },
//   {
//     date: moment('16/04/2018', 'DD/MM/YYYY'),
//   },
//   {
//     date: moment('30/05/2018', 'DD/MM/YYYY'),
//   },
// ];
export const events: EventData[] = [
  {
    date: moment('15/01/2018', 'DD/MM/YYYY'),
  },
  {
    date: moment('16/02/2018', 'DD/MM/YYYY'),
  },
  {
    date: moment('30/03/2018', 'DD/MM/YYYY'),
  },
  {
    date: moment('30/04/2018', 'DD/MM/YYYY'),
  },
  {
    date: moment('30/05/2018', 'DD/MM/YYYY'),
  },
  {
    date: moment('30/06/2018', 'DD/MM/YYYY'),
  },
  {
    date: moment('30/07/2018', 'DD/MM/YYYY'),
  },
  {
    date: moment('30/08/2018', 'DD/MM/YYYY'),
  },
  {
    date: moment('30/09/2018', 'DD/MM/YYYY'),
  },
  {
    date: moment('30/10/2018', 'DD/MM/YYYY'),
  },
  {
    date: moment('30/11/2018', 'DD/MM/YYYY'),
  },
  {
    date: moment('30/12/2018', 'DD/MM/YYYY'),
  },
];
