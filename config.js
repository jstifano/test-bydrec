/**
 * Config file to use in the whole app
 */
const config = {
    appConfig: {
        apiEndpoint: '/api',
        baseExternalApi: 'https://cloud.iexapis.com/stable/',
        port: process.env.APP_PORT,
        hostname: process.env.APP_HOST,
        tokenIEXCloud: 'pk_01310ecfabaf42879958f56f86f0e2d6'
    }
}

module.exports = config;