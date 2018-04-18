import * as moment from 'moment';

import { Event } from './typings';
import { v4 } from 'uuid';

interface Database {
  events: Event[];
}

const fakeDatabase: Database = {
  events: [
    {
      id: v4(),
      date: moment('15/01/2018', 'DD/MM/YYYY'),
      tags: [{ label: 'A', weight: 12 }, { label: 'B', weight: 40 }],
    },
    {
      id: v4(),
      date: moment('16/02/2018', 'DD/MM/YYYY'),
      tags: [
        { label: 'C', weight: 20 },
        { label: 'D', weight: 50 },
        { label: 'E', weight: 70 },
        { label: 'F', weight: 25 },
      ],
    },
    {
      id: v4(),
      date: moment('30/03/2018', 'DD/MM/YYYY'),
      tags: [
        { label: 'G', weight: 12 },
        { label: 'H', weight: 40 },
        { label: 'I', weight: 20 },
        { label: 'K', weight: 50 },
        { label: 'L', weight: 70 },
        { label: 'M', weight: 25 },
      ],
    },
    {
      id: v4(),
      date: moment('30/04/2018', 'DD/MM/YYYY'),
      tags: [{ label: 'N', weight: 12 }, { label: 'O', weight: 40 }],
    },
    {
      id: v4(),
      date: moment('30/05/2018', 'DD/MM/YYYY'),
      tags: [{ label: 'P', weight: 20 }, { label: 'Q', weight: 50 }, { label: 'R', weight: 70 }],
    },
    {
      id: v4(),
      date: moment('30/06/2018', 'DD/MM/YYYY'),
      tags: [{ label: 'S', weight: 25 }],
    },
    {
      id: v4(),
      date: moment('30/07/2018', 'DD/MM/YYYY'),
      tags: [{ label: 'T', weight: 12 }, { label: 'U', weight: 40 }],
    },
    {
      id: v4(),
      date: moment('30/08/2018', 'DD/MM/YYYY'),
      tags: [{ label: 'V', weight: 20 }],
    },
    {
      id: v4(),
      date: moment('30/09/2018', 'DD/MM/YYYY'),
      tags: [{ label: 'W', weight: 50 }],
    },
    {
      id: v4(),
      date: moment('30/10/2018', 'DD/MM/YYYY'),
      tags: [{ label: 'X', weight: 70 }],
    },
    {
      id: v4(),
      date: moment('30/11/2018', 'DD/MM/YYYY'),
      tags: [{ label: 'Y', weight: 25 }],
    },
    {
      id: v4(),
      date: moment('30/12/2018', 'DD/MM/YYYY'),
      tags: [{ label: 'Z', weight: 12 }],
    },
  ],
};

export const fetchEvents = () => new Promise<Event[]>((resolve) => resolve(fakeDatabase.events));
