

let http = require('http')

let httpServer = http.createServer(); // EventEmitter

httpServer.on('request', (req, res) => {
    console.log("new request received...")
    //
    res.write("Hello from server!")
    res.end()
})


httpServer.listen(3000, () => {
    console.log("server at http://localhost:3000")
})