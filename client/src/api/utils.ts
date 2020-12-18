import { config } from '../config';

export const fetcher = <T extends unknown>(path: RequestInfo, params?: RequestInit): Promise<T> => {
  const fullPath = config.REACT_APP_SERVER_URL + path;
  return fetch(fullPath, {
    mode: 'cors',
    ...params,
  }).then((res) => {
    if (200 <= res.status && res.status < 400) {
      return res.json() as T;
    }
    throw res;
  });
};
