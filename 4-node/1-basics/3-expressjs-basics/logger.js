

function logger(req, res, next) {
    let start = +new Date();
    let stream = process.stdout;
    let url = req.url
    let method = req.method;
    res.on('finish', () => {
        let duration = +new Date() - start;
        let logMessage = `${method} ${url} -  took ${duration}ms \n`
        stream.write(logMessage)
    })
    next();
}

module.exports = logger;