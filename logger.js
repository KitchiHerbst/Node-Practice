let url = 'http://logger.io/log';

const log = message => {
    //send an http request
    console.log(message)
}

module.exports.log = log
