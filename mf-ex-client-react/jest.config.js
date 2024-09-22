module.exports = {
  rootDir: 'src',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(j|t)sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
    'single-spa-react/parcel': 'single-spa-react/lib/cjs/parcel.cjs',
  },
  coverageDirectory: '../coverage',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
};
