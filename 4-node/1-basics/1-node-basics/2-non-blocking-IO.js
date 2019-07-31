
let fs = require('fs')

// console.log(process.pid)

// step-1 : read veg-menu.txt
console.log("reading veg menu...")
fs.readFile('./veg-menu.txt', (err, data) => {
    console.log(data.toString())
}) // async / non-blocking IO


// step-2 : read non veg-menu.txt
console.log("reading non-veg menu...")
fs.readFile('./non-veg-menu.txt', (err, data) => {
    console.log(data.toString())
}) // async / non-blocking IO


// step-3: do something else
console.log('do something else..')