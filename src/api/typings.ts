import { Duration, Moment } from 'moment';

export interface Event {
  id: string;
  date: Moment;
  duration: Duration;
  title: string;
  labels: Label[];
  organization?: string;
  description: string;
  skills: Tag[];
}

export interface Tag {
  label: string;
  weight: number;
}

export type Label = 'Internship' | 'Diploma' | 'Engineering degree' | 'Full time' | 'Project';
