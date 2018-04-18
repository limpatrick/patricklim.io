import { Moment } from 'moment';

export interface Event {
  id: string;
  date: Moment;
  tags: Tag[];
}

export interface Tag {
  label: string;
  weight: number;
}
