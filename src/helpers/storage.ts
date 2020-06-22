import { CookieAttributes, get, remove, set } from 'js-cookie';
import { mergeRight } from 'ramda';
import { COOKIE_PREFIX, COOKIE_SEPARATOR, COOKIE_THEME_KEY } from '~/constants';

export type Key = typeof COOKIE_THEME_KEY;
export const key = (k: Key) => `${COOKIE_PREFIX}${COOKIE_SEPARATOR}${k}`;

export const getItem = (k: Key) => get(key(k));
export const removeItem = (k: Key, o?: CookieAttributes) => remove(key(k), o);
export const setItem = (k: Key, v: string, o: CookieAttributes = {}) =>
  set(key(k), v, mergeRight({ expires: 7 }, o));
