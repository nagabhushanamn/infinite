

let http = require('http')
let fs = require('fs')

let httpServer = http.createServer(); // EventEmitter

httpServer.on('request', (req, res) => {
    console.log("new request received..." + req.url)
    //-----------------------------------------
    // res.write("Hello from server!")
    // res.end()
    //-----------------------------------------
    // Non blocking IO 
    //-----------------------------------------
    // fs.readFile('./PPT/all-levels node.pdf', (err, fileData) => {
    //     console.log('after IO, sending response..')
    //     res.write(fileData);
    //     res.end()
    // })
    //-----------------------------------------
    // IO streams
    //-----------------------------------------
    // let readStream = fs.createReadStream('./PPT/all-levels node.pdf'); // EE
    // readStream.on('data', (chunk) => {
    //     console.log('data-event ' + chunk.length)
    //     res.write(chunk)
    // })
    // readStream.on('end', () => {
    //     console.log("end-event ")
    //     res.end();
    // })

    // - or-

    // readStream.pipe(res);

    // console.log("server ready to take next request...")



    //-----------------------------------------------

    let url = req.url;
    let httpMethod = req.method;

    if (url === "/") {
        res.write('index path')
        res.end()
        return;
    }

    if (url === "/veg") {
        res.write('veg food')
        res.end()
        return;
    }
    if (url === "/non-veg") {
        res.write('nonveg food')
        res.end()
        return;
    }

    res.write('invalid path')
    res.end()


})


httpServer.listen(3000, () => {
    console.log("server at http://localhost:3000")
})