// module.exports = {
//   // preset: '@vue/cli-plugin-unit-jest',
//   moduleFileExtensions: ["js", "json", "vue"],
//   // transform: {
//   //   ".*\\.(vue)$": "vue-jest",
//   //   "\\.[jt]sx?$": "babel-jest",
//   // },
//   transform: {},
//   transformIgnorePatterns: ["node_modules"],
//   testEnvironment: 'jest-environment-node',
// };

module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transformIgnorePatterns: ["node_modules/(?!(echarts)|(zrender)/)"],
  setupFiles: ["./setupTests.js"],
};
