
const REGEX_LETTERS = /[a-zA-Z]+/g;

/**
 * Utility method to make the validation of only letters
 * @param {*} value --> Value to validate if are only letters 
 */
const isOnlyLetters = (value) => {
    let result = REGEX_LETTERS.test(value) ? true : false;
    return result;
}

/**
 * Utility mehtod to create the date as MM/DD/YY 
 * @param {*} value --> Value to validate if are only letters 
 */
const createDateFormatted = () => {
    let d = new Date
    let dformat = 
    [
        d.getMonth() + 1, 
        d.getDate(), 
        d.getFullYear().toString().substr(d.getFullYear().toString().length - 2, d.getFullYear().toString())
    ].join('/') +' '+ 
    [
        d.getHours(),
        d.getMinutes(),
        d.getSeconds()
    ].join(':');
    return dformat;
}

module.exports = {
    isOnlyLetters: isOnlyLetters,
    createDateFormatted: createDateFormatted
}