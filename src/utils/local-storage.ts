export const THEME_KEY = 'theme';

export type Key = typeof THEME_KEY;

export const PREFIX = 'pl';
export const key = (k: Key) => `${PREFIX}:${k}`;

export const getItem = (k: Key) => localStorage.getItem(key(k));
export const removeItem = (k: Key) => localStorage.removeItem(key(k));
export const setItem = (k: Key, v: string) => localStorage.setItem(key(k), v);
