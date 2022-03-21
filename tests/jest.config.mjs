import { resolve } from 'path'
const root = resolve(__dirname, '..');
import rootConfig from `${root}/jest.config.mjs`

module.exports = {
    ...rootConfig, ...{
        rootDir: root,
        displayName: "integration-tests",
        setupFilesAfterEnv: ["<rootDir>/tests/jest-setup.js"],
        testMatch: ["<rootDir>/tests/**/*.test.js"],
    }
}