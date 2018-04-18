import { Event as IEvent } from 'src/api/typings';
import { Omit } from 'material-ui';

export interface Event extends Omit<IEvent, 'tags'> {}

export interface EventPosition extends Event, Positionable {}

export interface YearLabel extends Positionable {
  text: string;
}

interface Positionable {
  position: number;
}
