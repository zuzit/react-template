const envConfig: Record<string, string> = {
  example: process.env.EXAMPLE || 'example',
};

const validateConfig = () => {
  const optionalKeys: string[] = [];
  const missingConfigIndex = Object.keys(envConfig)
    .filter((key) => optionalKeys.indexOf(key) === -1)
    .findIndex((key) => envConfig[key] === undefined || envConfig[key] === null);

  if (missingConfigIndex > -1) {
    throw Error(`Missing config attribute: ${Object.keys(envConfig)[missingConfigIndex]}`);
  } else {
    return envConfig;
  }
};

const config = {
  ...validateConfig(),
};

export default config;
