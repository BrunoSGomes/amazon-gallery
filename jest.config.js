const { resolve } = require('path');
const root = resolve(__dirname);
module.exports = {
    rootDir: root,
    displayName: 'e2e-tests',
    testMatch: ['<rootDir>/tests/**/*.test.js'],
    testEnvironment: 'node',
    clearMocks: true
};