export const PREFIX = 'pl';
export const key = (k: string) => `${PREFIX}:${k}`;

export const getItem = (k: string) => localStorage.getItem(key(k));
export const setItem = (k: string, v: string) => localStorage.setItem(key(k), v);
