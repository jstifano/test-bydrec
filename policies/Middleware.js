'use strict';

const ResponseService = require('../utils/Response');
const ValidationService = require('../utils/Validation');

/**
 * Policy to validate the "symbol" param in the URL.
 * @param {*} data 
 * description ::: The data has to exist, be greater than 2 and lower 
 * than 10 and only letters are valid.
 */
const sanitizeGetStockService = (data) => {
    if (data && data.length > 2 && data.length < 10 && ValidationService.isOnlyLetters(data)) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    sanitizeGetStockService: sanitizeGetStockService
}