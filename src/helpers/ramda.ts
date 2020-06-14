import { concat, isNil, pipe, prop, splitAt, toUpper } from 'ramda';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const propIsNil = (name: string, obj: any) => pipe(prop<string, any>(name), isNil)(obj);

export const upperFirst = (elem: string) => {
  const tmp = splitAt(1, elem);

  return concat(toUpper(tmp[0]), tmp[1]);
};
