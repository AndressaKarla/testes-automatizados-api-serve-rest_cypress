const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 720,

  e2e: {
    setupNodeEvents(on, config) {
      const environment = config.env.environment || 'prod'
      config.env = require(`./cypress/support/environments/${environment}.json`)
      config.baseUrl = config.env.baseUri

      return config
    },
    env: {
      // cypress-plugin-api
      hideCredentials: true,
      hideCredentialsOptions: {
        body: ['password']
      }
    }
  }
})
