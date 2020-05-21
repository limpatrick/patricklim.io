import { isNil, pipe, prop } from 'ramda';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const propIsNil = (name: string, obj: any) => pipe(prop<string, any>(name), isNil)(obj);
