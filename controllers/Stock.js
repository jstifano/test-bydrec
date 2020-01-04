'use strict';

const StockService = require('../services/Stock');
const ResponseService = require('../utils/Response');

/**
 * Controller to get the stock ticker symbol
 * return ::: Json containing 
 * 
 * latest stock price.
 * path to the logo of the company.
 * latest new articles for the company.
 */
const getStock = async (symbol, options) => {
    const response = await StockService.get(symbol, options);
    return response;
}

module.exports = {
    getStock: getStock
}