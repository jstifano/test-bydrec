const http = require('http');
const url = require('url');
const StockController = require('./controllers/Stock');
const ResponseService = require('./utils/Response');
const MiddlewareService = require('./policies/Middleware');
const ValidationService = require('./utils/Validation');
const { appConfig } = require('./config');

module.exports = http.createServer( async (req, res) => {
    // Assigning header to return a JSON instead of a string
    res.setHeader('Content-Type', 'application/json');

    const reqUrl = url.parse(req.url, true);

    if (req.method === "GET") { 
        if (reqUrl.pathname.indexOf(appConfig.apiEndpoint+'/stock') !== -1 ) {
            // Service to validate if the symbol comes in the URL.
            let sanitized = await MiddlewareService.sanitizeGetStockService(reqUrl.pathname.split('/')[3]);

            // Object where the info about the request is saved.
            let options = {
                request_url: reqUrl.pathname,
                request_time: ValidationService.createDateFormatted(),
                successfully: null 
            }
            if (sanitized) {
                let response = await StockController.getStock(reqUrl.pathname.split('/')[3], options);
                return res.end(JSON.stringify(response));
            } else {
                return res.end( JSON.stringify( ResponseService.craftErrorResponseObj({}, 'Invalid params', 400) ) );   
            }
        } else {
            return res.end( JSON.stringify( ResponseService.craftErrorResponseObj({}, 'The resource doesn\'t exist', 404) ) );     
        }  
    } else {
        return res.end( JSON.stringify( ResponseService.craftErrorResponseObj({}, 'Invalid Method.', 405) ) );
    }

    /**
     * We can add more method types here (POST, PUT, etc)
     * but here we just use GET method for the service
     */
});