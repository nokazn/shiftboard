const envList = ['REACT_APP_SERVER_URL'] as const;

type Env = typeof envList[number];
type Config = Record<Env, string>;

const initConfig = (): Config => {
  return envList.reduce<Config>((prev, curr) => {
    const env = process.env[curr];
    if (env == null) {
      throw new Error(`Environmental variables are not set: ${env}`);
    }
    return Object.assign(prev, { [curr]: env });
  }, {} as Config);
};

export const config = initConfig();
