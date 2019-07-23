
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
        this.todos = this.todos.concat(newTodo)
    }
    editTodo(id, newTitle) {

    }
    deleteTodo(id) {

    }
    completeTodo(id) {

    }
    completeAll() {

    }
    clearCompleted() {

    }
    viewTodos(filter) {

    }

}

let service = new TodoService();