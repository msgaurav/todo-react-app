module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  moduleNameMapper  : {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
}
