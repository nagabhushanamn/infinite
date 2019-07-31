
let fs = require('fs')

// console.log(process.pid)

// step-1 : read veg-menu.txt
let vegMenu = fs.readFileSync('./veg-menu.txt') // sync
console.log(vegMenu.toString())

// ste-2: do something else
console.log('do something else..')