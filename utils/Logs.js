const fs = require('fs');

/**
 * Function to read the file and register the log when 
 * a request is done by a user.
 * @param {*} data 
 */
const registerLog = (data) => {
    fs.readFile('./logs/logs_registered.json', 'utf8', (err, content) => {
        if(err) throw err;
        let info = JSON.parse(content);
        info.logs.push(data);

        fs.writeFile('./logs/logs_registered.json', JSON.stringify(info, null, 2), (err) => {
            if (err) {
                console.log('Error writing logs file', err);
            } else {
                console.log('Successfully wrote logs file');
            }
        })
    })
}

module.exports = {
    registerLog: registerLog
}