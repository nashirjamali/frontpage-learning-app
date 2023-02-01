const withPlugins = require('next-compose-plugins');
const withCss = require('@zeit/next-css');
const withImages = require('next-images');

const path = require('path');

const nextReactSvgConfig = {
  include: path.resolve(__dirname, './public/images'),
};
const withReactSvg = require('next-react-svg')(nextReactSvgConfig);

module.exports = withPlugins([
  withCss({}),
  withImages({}),
  withReactSvg({
    webpack(config, options) {
      return config;
    },
  }),
]);
