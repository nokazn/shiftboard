require('dotenv').config();

const envList = ['REACT_APP_SERVER_URL'];
envList.forEach((env) => {
  if (process.env[env] == null) {
    throw new Error(`Environmental variables are not set: ${env}`);
  }
});

module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};
