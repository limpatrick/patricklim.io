import { Event } from 'src/api/typings';

export interface EventPosition extends Event, Positionable {}

export interface YearLabel extends Positionable {
  text: string;
}

interface Positionable {
  position: number;
}
