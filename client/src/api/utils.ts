type FetcherStatus = 'fulfilled' | 'rejected' | 'pending';
export type Suspender<T extends unknown = unknown> = { read(): T };
// type Primitive = string | number | boolean;
type Query = Record<string, string>;

const fetchWrapper = <R extends unknown>(path: string, params?: RequestInit): Promise<R> => {
  const url = new URL(path, process.env.REACT_APP_SERVER_URL).toString();
  return fetch(url, {
    mode: 'cors',
    ...params,
  }).then(async (res) => {
    if (res.status === 200) return res.json();
    if (200 < res.status && res.status < 400) return res;
    throw res;
  });
};

const genURL = (path: string, params: Record<string, string>): URL => {
  const query = new URLSearchParams(params);
  const url = Array.from(query.keys()).length > 0 ? `${path}?${query}` : path;
  return new URL(url, process.env.REACT_APP_SERVER_URL);
};

export const fetcher = <R extends unknown>(path: string, query: Query = {}, params?: RequestInit): Suspender<R> => {
  let status: FetcherStatus = 'pending';
  let result: R;
  let error: Error;

  const suspender = fetchWrapper<R>(genURL(path, query).toString(), params)
    .then(async (res) => {
      status = 'fulfilled';
      result = res;
    })
    .catch((err) => {
      status = 'rejected';
      error = err;
    });

  return {
    read() {
      switch (status) {
        case 'pending':
          throw suspender;
        case 'rejected':
          throw error;
        default:
          return result;
      }
    },
  };
};

export const customFetcher = (method: string) => {
  return <R extends unknown>(path: string, query: Query = {}, params?: RequestInit) => {
    return fetchWrapper<R>(genURL(path, query).toString(), {
      method,
      ...params,
    });
  };
};
