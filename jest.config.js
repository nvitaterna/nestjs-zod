// tests should always run in UTC timezone
process.env.TZ = 'UTC';

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  passWithNoTests: true
};