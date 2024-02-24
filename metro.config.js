// Correct usage of dynamic import within an async function
async function getConfig() {
  const { getDefaultConfig, mergeConfig } = await import('@react-native/metro-config');

  const defaultConfig = await getDefaultConfig(__dirname);
  const config = {
      // Your custom configuration here
  };

  return mergeConfig(defaultConfig, config);
}

module.exports = getConfig();
