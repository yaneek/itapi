const path = require('path');

module.exports = {
  moduleFileExtensions: ['js', 'ts', 'json', 'node'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  modulePathIgnorePatterns: ['node_modules_cache'],
  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}', '!src/**/*.d.ts', '!src/**/*.test.{ts,tsx,js,jsx}'],
  coveragePathIgnorePatterns: ['^/node_modules/', '/I[A-Z].*'],
  setupTestFrameworkScriptFile: path.resolve(__dirname, './jest-node-setup.js'),
};
