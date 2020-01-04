/**
 * REST Api for test of Bydrec Company.
 * @author:: Javier Stifano  
 */

require('dotenv').config(); // Used to just get the ENV variables from .env file
const server = require('./router');
const { appConfig } = require('./config');

server.listen(appConfig.port, appConfig.hostname, () => {
    console.log(`Server running at http://${appConfig.hostname}:${appConfig.port}/`);
});