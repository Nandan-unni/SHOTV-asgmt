const ENV = process.env.NODE_ENV;

const local = {
  ENV,
  APP_URL: `http://localhost:3000/`,
  API_URL: `https://www.tvmaze.com/api/`,
};

const development = {
  ...local,
};

const production = {
  ...development,
  APP_URL: `https://electroswap.vercel.app/`,
  API_URL: `https://www.tvmaze.com/api/`,
};

const configs = { local, development, production };
const currentConfig = configs[ENV];

export const config = {
  ENV: currentConfig.ENV,
  APP_URL: currentConfig.APP_URL,
  API_URL: currentConfig.API_URL,
};
