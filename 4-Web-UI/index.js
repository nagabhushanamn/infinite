
console.log('-index.js-')

// ----------------------------------------
// using DOM API
// ----------------------------------------

let box = document.querySelector('.alert-info')
let hideBtn = document.querySelector(".btn-danger")
let showBtn = document.querySelector(".btn-success")
let nextBtn = document.querySelector(".btn-primary")

hideBtn.addEventListener('click', e => {
    box.style.display = 'none'
})
showBtn.addEventListener('click', e => {
    box.style.display = ''
})
nextBtn.addEventListener('click', e => {
    box.innerHTML = "will have 1 small break"
})


// ----------------------------------------
// using DOM + Timer API
// ----------------------------------------
let pandaEle = document.getElementById('pandaEle');
let idx = 1;
let interval = setInterval(() => {
    let imgPath = `images/${idx}.jpeg`
    if (idx !== 2)
        pandaEle.src = imgPath
    idx++;
    if (idx > 5)
        idx = 1;
}, 1000);

clearInterval(interval)