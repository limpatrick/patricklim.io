import { CookieAttributes, get, remove, set } from 'js-cookie';
import { mergeRight } from 'ramda';

export const THEME_KEY = 'theme';

export type Key = typeof THEME_KEY;

export const PREFIX = 'pl';
export const key = (k: Key) => `${PREFIX}_${k}`;

export const getItem = (k: Key) => get(key(k));
export const removeItem = (k: Key, o?: CookieAttributes) => remove(key(k), o);
export const setItem = (k: Key, v: string, o: CookieAttributes = {}) =>
  set(key(k), v, mergeRight({ expires: 7 }, o));
