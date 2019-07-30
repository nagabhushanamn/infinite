

let EventEmitter = require('events').EventEmitter;

//-------------------------------------------
// door module
//-------------------------------------------

class Door extends EventEmitter {
    open() {
        console.log('door opened..')
        this.emit('open', { num: 1, floor: 2 })
    }
    close() {
        console.log('door closed..')
        this.emit('close', { num: 1, floor: 2 })
    }
}

let door = new Door();
//-------------------------------------------
// light module
//-------------------------------------------

const light = {
    setUp() {
        door.on('open', e => {
            console.log("LIGHT ON")
        })
        door.on('close', e => {
            console.log("LIGHT OFF")
        })
    }
}
light.setUp();


//-------------------------------------------
// AC module
//-------------------------------------------

const ac = {
    setUp() {
        door.on('open', e => {
            console.log("AC ON")
        })
        door.on('close', e => {
            console.log("AC OFF")
        })
    }
}
ac.setUp();

//-------------------------------------------
setTimeout(() => {
    door.open()
    setTimeout(() => {
        door.close()
    }, 3000)
}, 3000)

