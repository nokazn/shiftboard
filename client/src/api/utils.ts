type FetcherStatus = 'fulfilled' | 'rejected' | 'pending';
export type Suspender<T extends unknown = unknown> = { read(): T };

// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetcher = <R extends Record<string, unknown>>(path: RequestInfo, params?: RequestInit): Suspender<R> => {
  const fullPath = `${process.env.REACT_APP_SERVER_URL}${path}`;
  let status: FetcherStatus = 'pending';
  let result: R;
  let error: Error;

  const suspender = fetch(fullPath, {
    mode: 'cors',
    ...params,
  })
    .then(async (res) => {
      console.log(res.status, res);
      if (200 <= res.status && res.status < 400) return res.json();
      throw res;
    })
    .then(async (res: R) => {
      console.log('fulfilled', res);
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
