/**
 * Unit tests for Financial Watch API
 */

const assert = require('assert');
const StockService = require('../services/Stock');
const { appConfig } = require('../config');

describe('Tests for Stock Service:', () => {
    
    describe('# SUITE TO GET THE LATEST STOCK PRICE OF SYMBOL "AAPL"', () => {
        let symbol = "AAPL";
        let url = appConfig.baseExternalApi+'stock/'+symbol+'/quote/latestPrice?token='+appConfig.tokenIEXCloud;

        it('1) The latest price is obtained successfully.', () => {
            StockService.getLastPrice(url, symbol)
            .then(response => {
                assert.equal(response, 297.43); // The response must match with 297.43
            })
            .catch(error => {
                console.log("Suite 1 / Test 1 - FAILED ", error);    
            })
        })

        it('2) The latest price is not the correct price', () => {
            StockService.getLastPrice(url, symbol)
            .then(response => {
                assert.notEqual(response, 100222); // The response is different than 100222
            })
            .catch(error => {
                console.log("Suite 1 / Test 2 - FAILED ", error);
            })
        });
    });

    describe('# SUITE TO GET THE URL COMPANY LOGO', () => {
        let symbol = "AAPL";
        let url = appConfig.baseExternalApi+'stock/'+symbol+'/logo?token='+appConfig.tokenIEXCloud;

        it('1) The url company logo is as expected.', () => {
            StockService.getUrlCompanyLogo(url, symbol)
            .then(response => {
                assert.equal(response, "https://storage.googleapis.com/iexcloud-hl37opg/api/logos/AAPL.png"); // The response must match with the URL
            })
            .catch(error => {
                console.log("Suite 2 / Test 1 - FAILED ", error);    
            })
        })

        it('2) The url company logo is not the expected.', () => {
            StockService.getLastPrice(url, symbol)
            .then(response => {
                assert.notEqual(response, "https://anyurllogo.com"); // The response is different than the URL logo
            })
            .catch(error => {
                console.log("Suite 2 / Test 2 - FAILED ", error);
            })
        });
    });
});