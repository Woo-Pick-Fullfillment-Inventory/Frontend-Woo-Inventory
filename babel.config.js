module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['.'], // Set the root directory for resolving paths
        alias: {
          src: './src', // Define an alias for "src/"
        },
      },
    ],
  ],
};
