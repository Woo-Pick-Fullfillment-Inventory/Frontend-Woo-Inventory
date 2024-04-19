// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defaults } = require('ts-jest/presets');

module.exports = {
  ...defaults,
  preset: 'react-native',
  setupFiles: ['./jest.setup.ts'],
  //Jest transform and handle different file types
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.jest.json',
      },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
