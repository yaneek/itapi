const baseNodeConfig = require('../../jest/jest.config.node.js');
const { displayName, name } = require('./package.json');

module.exports = {
  ...baseNodeConfig,
  displayName,
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.json',
    },
  },
  name,
  testMatch: ['<rootDir>/src/**/*.test.(ts|js)'],
};
