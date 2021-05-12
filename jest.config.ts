module.exports = {
  clearMocks: true,
  verbose: true,
  transform: {
    '^.+\\jsx?$': 'babel-jest',
    '^.+\\tsx?$': 'ts-jest',
  },
  testPathIgnorePatterns: ['node_modules', 'public', 'coverage', 'jest.config.ts'],
  collectCoverage: false,
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx', '!coverage/**', '!public/**'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFilesExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  watchman: true,
};