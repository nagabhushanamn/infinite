


let asiaKolkataV2 = document.getElementById('asia-kolkata-v2');
let asiaDubaiV2 = document.getElementById('asia-dubai-v2');
let americaNewyorkV2 = document.getElementById('america-newyork-v2');


function ReactClock(props) {
    // let div1Ele = React.createElement('div', { className: 'card-header' }, props.timeZone)
    // let spanEle = React.createElement('span', { className: 'badge badge-dark' }, new Date().toLocaleTimeString('en-US', { timeZone: props.timeZone }))
    // let div2Ele = React.createElement('div', { className: 'card-body'}, spanEle)
    // let divEle = React.createElement('div', { className: 'card' }, div1Ele, div2Ele)
    // return divEle
    // or
    // JSX (==> we must transpile to pure javascript code with babel)
    return (
        <div className="card">
            <div className="card-header">{props.timeZone}</div>
            <div className="card-body">
                <span className="badge badge-dark">
                    {new Date().toLocaleTimeString('en-US', { timeZone: props.timeZone })}
                </span>
            </div>
        </div>
    )

}

setInterval(() => {
    ReactDOM.render(ReactClock({ timeZone: 'Asia/Kolkata' }), asiaKolkataV2)
    ReactDOM.render(ReactClock({ timeZone: 'Asia/Dubai' }), asiaDubaiV2)
    ReactDOM.render(ReactClock({ timeZone: 'America/New_york' }), americaNewyorkV2)
}, 1000)