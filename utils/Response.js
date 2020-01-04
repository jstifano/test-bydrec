'use strict';

/**
 * Service to handle the response (Error or OK)
 * @params :::
 * data --> The data obtained after execution of HTTP request to external API
 * message --> Message customized for the user
 * code --> HTTP code (2xx, 3xx, 4xx, etc).
 */

const craftOkResponseObj = (data, message, code) => {
    if(!data) data = {};
    if(!message) message = '';
    return { data: data, msg: message, statusCode: code };
}

const craftErrorResponseObj = (error, message, code) => {
    if(!code) code = 500;
    if(!message) message = '';
    if(!error) error = 'Unknown Error';
    return { err: error, msg: message, statusCode: code };
}

module.exports = {
    craftOkResponseObj: craftOkResponseObj,
    craftErrorResponseObj: craftErrorResponseObj
}