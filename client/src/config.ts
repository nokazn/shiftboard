const envList = ['REACT_APP_SERVER_URL'] as const;

type Env = typeof envList[number];
type Config = Record<Env, string>;

export const checkEnv = () => {
  envList.forEach((env) => {
    if (process.env[env] == null) {
      throw new Error(`Environmental variables are not set: ${env}`);
    }
  });
};

const initConfig = (): Config => {
  return envList.reduce<Config>((prev, curr) => {
    const env = process.env[curr];
    if (env == null) {
      throw new Error(`Environmental variables are not set: ${env}`);
    }
    return {
      ...prev,
      [curr]: env,
    };
  }, {} as Config);
};

export const config = initConfig();
