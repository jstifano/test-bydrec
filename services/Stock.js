'use strict';

const ResponseService = require('../utils/Response');
const axios = require('axios');
const { appConfig } = require('../config');
const LogsService = require('../utils/Logs');

/**
 * Service where are called all the endpoints to get the info.
 * @param {*} symbol --> Initials of the stock (ej: AAPL)
 * return :: JSON Object
 */
const get = async (symbol, options) => {
    let data = {
        lastPrice: null,
        companyLogo: null,
        latestArticles: null
    }

    const urlLastPrice = appConfig.baseExternalApi+'stock/'+symbol.toString()+'/quote/latestPrice?token='+appConfig.tokenIEXCloud;
    const urlCompanyLogo = appConfig.baseExternalApi+'stock/'+symbol.toString()+'/logo?token='+appConfig.tokenIEXCloud;
    const urlLatestArticles = appConfig.baseExternalApi+'stock/'+symbol.toString()+'/news/last?token='+appConfig.tokenIEXCloud;

    const lastPrice = await getLastPrice(urlLastPrice, symbol);
    const companyLogo = await getUrlCompanyLogo(urlCompanyLogo, symbol);
    const latestArticles = await getLatestArticles(urlLatestArticles, symbol);

    if(lastPrice.err || companyLogo.err || latestArticles.err) {
        options.successfully = "Failed to respond to the requestor.";
        return ResponseService.craftErrorResponseObj({}, 'Error obtaining the info', 202);
    } else {
        data.lastPrice = parseFloat(lastPrice);
        data.companyLogo = companyLogo.toString();
        data.latestArticles = latestArticles;
        options.successfully = 'Fulfilled successfully.';
        LogsService.registerLog(options);

        return ResponseService.craftOkResponseObj(data, 'Stock obtained with details', 200);
    }
}

/**
 * Private service to get the last stock price
 * @param {*} url --> Url to request the info.
 * @param {*} symbol --> Initials of the stock (ej: AAPL)
 */
const getLastPrice = async (url, symbol) => {
    let response = await axios.get(url);
    return response.data;
}

/**
 * Private service to get the comapny logo
 * @param {*} url --> Url to request the info.
 * @param {*} symbol --> Initials of the stock (ej: AAPL)
 */
const getUrlCompanyLogo = async (url, symbol, lastPrice) => {
    let response = await axios.get(url);
    return response.data.url;
}

/**
 * Private service to get the latest articles
 * @param {*} url --> Url to request the info.
 * @param {*} symbol --> Initials of the stock (ej: AAPL)
 */
const getLatestArticles = async (url, symbol) => {
    let response = await axios.get(url);
    return response.data;
}

module.exports = {
    get: get
}