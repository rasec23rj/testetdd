/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {
  roots: ['<rootDir>/src'],
  collectionCoverageFrom: ['<rootDir>/src/**/*.ts'],
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "node",
  transform: {
    '.+\\.ts$':'ts-jest'
  },
 
};
