export const fetcher = (path: RequestInfo, params?: RequestInit) => {
  return fetch(path, params)
    .then((res) => res.json())
};
