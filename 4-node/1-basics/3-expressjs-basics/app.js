


let express = require('express')
let fs = require('fs');
let logger = require('./logger')
let bodyParser = require('body-parser')

let app = express();
app.use(logger)
app.use(express.static(__dirname + "/public"))  // middleware
app.get('/todos', (req, res) => {
    let todos = ["item-1", "item-2", "item-3", "item-4", "item-5"]
    res.json(todos);
})
app.use(bodyParser.json())
app.post('/todos', (req, res) => {
    console.log(req.body)
    res.send('todo posted')
})


app.listen(3000, () => {
    console.log('server started...')
})