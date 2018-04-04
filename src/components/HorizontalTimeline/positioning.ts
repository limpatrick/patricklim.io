import { min, reduce } from 'lodash';

import { EventData } from 'src/models/events';
import { EventPosition } from './Timeline';

export const calculateEventXPosition = (
  diffDays: number,
  minDiffDays: number,
  minDistance: number,
  previousDistance: number
) => minDistance * diffDays / minDiffDays + previousDistance;

export const calculateInferiorBoundary = (wrapperWidth: number, containerOffsetWidth: number) =>
  containerOffsetWidth - wrapperWidth;

export const calculateLeftTranslateX = (containerOffsetWidth: number, previousTranslateX: number) => {
  const translateX = previousTranslateX + containerOffsetWidth;

  return translateX > 0 ? 0 : translateX;
};

export const calculateMinEventDiffDays = (events: EventData[]) => {
  const minEventDiffDays = min(
    reduce<EventData, number[]>(
      events,
      (acc, elem, key) => {
        if (key < events.length - 1) {
          const diffDays = events[key + 1].date.diff(elem.date, 'days');

          acc.push(diffDays);
        }

        return acc;
      },
      []
    )
  );

  return minEventDiffDays ? minEventDiffDays : 0;
};

export const calculateRightTranslateX = (
  containerOffsetWidth: number,
  previousTranslateX: number,
  wrapperWidth: number
) => {
  const translateX = previousTranslateX - containerOffsetWidth;
  const inferiorBoundary = calculateInferiorBoundary(wrapperWidth, containerOffsetWidth);

  return translateX < inferiorBoundary ? inferiorBoundary : translateX;
};

export const calculateWrapperWidth = (events: EventPosition[], edgeDistance: number) =>
  events[events.length - 1].position + edgeDistance;

export const getEventsWithPosition = (
  events: EventData[],
  edgeDistance: number,
  minEventDiffDays: number,
  minEventDistance: number
) =>
  reduce<EventData, EventPosition[]>(
    events,
    (acc, event, key) => {
      if (key === 0) {
        acc.push({ ...event, position: edgeDistance });
      } else {
        const diffDays = event.date.diff(events[key - 1].date, 'days');
        const position = calculateEventXPosition(diffDays, minEventDiffDays, minEventDistance, acc[key - 1].position);

        acc.push({ ...event, position });
      }

      return acc;
    },
    []
  );
