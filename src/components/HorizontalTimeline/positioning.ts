import * as moment from 'moment';

import { EventPosition, YearLabel } from './Timeline';
import { map, min, reduce } from 'lodash';

import { EventData } from 'src/models/events';

const calculateEventXPosition = (
  diffDays: number,
  minDiffDays: number,
  minDistance: number,
  edgeDistance: number
) => calculateXPosition(diffDays, minDiffDays, minDistance) + edgeDistance;

const calculateXPosition = (diffDays: number, minDiffDays: number, minDistance: number) =>
  minDistance * diffDays / minDiffDays;

const calculateMinEventDiffDays = (events: EventData[]) => {
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

const getDiffDays = (startDate: moment.Moment, endDate: moment.Moment) => endDate.diff(startDate, 'days');

const getYearLabel = (
  eventDate: moment.Moment,
  yearDate: moment.Moment,
  minEventDistance: number,
  minEventDiffDays: number,
  previousDistance: number
): YearLabel => {
  const diffDays = getDiffDays(eventDate, yearDate);
  const position = calculateEventXPosition(diffDays, minEventDiffDays, minEventDistance, previousDistance);

  return {
    position,
    text: yearDate.format('YYYY'),
  };
};

const getYearsBetween = (start: number, end: number) => {
  let years: number[] = [];

  for (let y = start; y <= end; y++) {
    years.push(y);
  }

  return years;
};

export const calculateInferiorBoundary = (containerWidth: number, wrapperWidth: number) =>
  containerWidth - wrapperWidth;

export const calculateLeftTranslateX = (containerWidth: number, previousTranslateX: number) => {
  const translateX = previousTranslateX + containerWidth;

  return translateX > 0 ? 0 : translateX;
};

export const calculateRightTranslateX = (containerWidth: number, previousTranslateX: number, wrapperWidth: number) => {
  const translateX = previousTranslateX - containerWidth;
  const inferiorBoundary = calculateInferiorBoundary(containerWidth, wrapperWidth);

  return translateX < inferiorBoundary ? inferiorBoundary : translateX;
};

export const calculateWrapperWidth = (events: EventPosition[], edgeDistance: number) =>
  events[events.length - 1].position + edgeDistance;

export const getEventsYearLabel = (events: EventPosition[], minEventDistance: number) => {
  const minEventDiffDays = calculateMinEventDiffDays(events);
  const years = getYearsBetween(events[0].date.get('year'), events[events.length - 1].date.get('year') + 1);

  return map(years, (year) => {
    const yearDate = moment([year]);
    const previousDistance = events[0].position;

    return getYearLabel(events[0].date, yearDate, minEventDistance, minEventDiffDays, previousDistance);
  });
};

export const getEventsWithPosition = (events: EventData[], edgeDistance: number, minEventDistance: number) => {
  const minEventDiffDays = calculateMinEventDiffDays(events);

  return map(events, (event) => {
    const diffDays = getDiffDays(events[0].date, event.date);
    const position = calculateEventXPosition(diffDays, minEventDiffDays, minEventDistance, edgeDistance);

    return { ...event, position };
  });
};
