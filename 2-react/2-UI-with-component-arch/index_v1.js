console.log('-index.js-')


//-----------------------------------------------
// way-1 : plain-js
//-----------------------------------------------

let asiaKolkataV1 = document.getElementById('asia-kolkata-v1');
let asiaDubaiV1 = document.getElementById('asia-dubai-v1');
let americaNewyorkV1 = document.getElementById('america-newyork-v1');

// component class
function Clock(props) {
    return `
            <div class="card">
                <div class="card-header">${props.timeZone}</div>
                <div class="card-body">
                    <span class="badge badge-dark">
                        ${new Date().toLocaleTimeString('en-US', { timeZone: props.timeZone })}
                    </span>
                </div>
            </div>
        `
}


setInterval(() => {
    asiaKolkataV1.innerHTML = Clock({ timeZone: 'Asia/Kolkata' })
    asiaDubaiV1.innerHTML = Clock({ timeZone: 'Asia/Dubai' })
    americaNewyorkV1.innerHTML = Clock({ timeZone: 'America/New_york' })
}, 1000)
