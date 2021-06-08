module.exports = {
  clearMocks: true,
  verbose: true,
  transform: {
    '^.+\\jsx?$': 'babel-jest',
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  testPathIgnorePatterns: ['node_modules', 'public', 'coverage', 'jest.config.ts'],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx', '!coverage/**', '!public/**'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  watchman: true,
};