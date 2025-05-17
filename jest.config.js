module.exports = {
  preset: 'react-native',
  setupFiles: ['./jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-native-async-storage|react-redux|@react-navigation|@react-native-community|react-native-linear-gradient)/)',
  ],
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect"
  ],
  moduleNameMapper: {
    'react-native-linear-gradient': '<rootDir>/__mocks__/react-native-linear-gradient.js',
  },
};