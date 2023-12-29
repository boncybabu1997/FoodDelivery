const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Replace the `../Utilities/Platform` alias with the `react-native-web/dist/exports/Platform` alias.
  config.resolve.alias['../Utilities/Platform'] = 'react-native-web/dist/exports/Platform';

  return config;
};
