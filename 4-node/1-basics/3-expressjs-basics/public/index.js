console.log('-index.js-')


let todosBtn = document.getElementById('todos-btn');
todosBtn.addEventListener('click', e => {

    let promise = fetch('todos');
    promise
        .then(response => response.json())
        .then(todos => {
            console.log(todos)
        })
        .catch(err => {
            console.log(err)
        })

})