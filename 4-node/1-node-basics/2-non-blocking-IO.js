
let fs = require('fs')

// console.log(process.pid)

// step-1 : read veg-menu.txt
fs.readFile('./veg-menu.txt', (err, data) => {
    console.log(data.toString())
}) // async / non-blocking IO


// step-2: do something else
console.log('do something else..')