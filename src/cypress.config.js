const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // The base URL for the tests, which is the React homepage
    baseUrl:'https://react.dev/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
