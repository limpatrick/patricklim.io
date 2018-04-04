import { min, reduce } from 'lodash';

import { EventData } from 'src/models/events';

export interface EventPosition extends EventData {
  position: number;
}

export type TranslateXType = 'left' | 'right';

export const calculateEventXPosition = (
  diffDays: number,
  minDiffDays: number,
  minDistance: number,
  previousDistance: number
) => minDistance * diffDays / minDiffDays + previousDistance;

export const calculateFillingBarProgress = (eventXPosition: number, wrapperWidth: number) =>
  eventXPosition / wrapperWidth * 100;

export const calculateInferiorBoundary = (wrapperWidth: number, containerOffsetWidth: number) =>
  containerOffsetWidth - wrapperWidth;

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

export const calculateTranslateX = (
  containerOffsetWidth: number,
  previousTranslateX: number,
  type: TranslateXType,
  wrapperWidth: number
) => {
  if (type === 'left') {
    const translateX = previousTranslateX + containerOffsetWidth;

    return translateX > 0 ? 0 : translateX;
  } else {
    const translateX = previousTranslateX - containerOffsetWidth;
    const inferiorBoundary = calculateInferiorBoundary(wrapperWidth, containerOffsetWidth);

    return translateX < inferiorBoundary ? inferiorBoundary : translateX;
  }
};

export const calculateWrapperWidth = (events: EventPosition[], boundaryDistance: number) =>
  events[events.length - 1].position + boundaryDistance;

export const getEventsWithPosition = (
  events: EventData[],
  boundaryDistance: number,
  minEventDiffDays: number,
  minEventDistance: number
) =>
  reduce<EventData, EventPosition[]>(
    events,
    (acc, event, key) => {
      if (key === 0) {
        acc.push({ ...event, position: boundaryDistance });
      } else {
        const diffDays = event.date.diff(events[key - 1].date, 'days');
        const position = calculateEventXPosition(diffDays, minEventDiffDays, minEventDistance, acc[key - 1].position);

        acc.push({ ...event, position });
      }

      return acc;
    },
    []
  );
