
// {id:0,title:'',completed:false}
class Todo {
    constructor(title) {
        Todo.nextId++;
        this.id = Todo.nextId;
        this.title = title;
        this.completed = false
    }
}
Todo.nextId = 0;

class TodoService {
    constructor() {
        this.todos = []
    }
    addTodo(title) {
        let newTodo = new Todo(title)
        // this.todos.push(newTodo) // mutate
        this.todos = this.todos.concat(newTodo) // immutable
    }
    editTodo(id, newTitle) {

    }
    deleteTodo(id) {
        // a.immutable
        // this.todos = this.todos.filter(function (item) {
        //     return item.id !== id
        // })
        // b.mutable
        let idx = this.todos.findIndex(function (item) {
            return item.id === id;
        })
        this.todos.splice(idx, 1)
    }
    completeTodo(id) {

    }
    completeAll() {

    }
    clearCompleted() {

    }
    viewTodos(filterBy) {
        if (filterBy === "ALL")
            this.todos.forEach(function (item) {
                console.log(item)
            })
    }

}

let service = new TodoService();