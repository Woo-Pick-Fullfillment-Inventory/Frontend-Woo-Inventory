const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
async function getConfig() {
    const defaultConfig = await getDefaultConfig(__dirname);
    const config = {
        // Your custom configuration here
    };

    return mergeConfig(defaultConfig, config);
}

module.exports = getConfig();
