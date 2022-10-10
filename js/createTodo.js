const addTodoBtn = document.getElementById('add-todo-btn');
const addTodoInput = document.getElementById('add-todo-input');
const todoList = document.querySelector('.todo-list-container__todo-list');

addTodoBtn.addEventListener('click', () => {

    addTodoInput.value === '' ? console.log('Введите задачу') : createTodo(addTodoInput.value);

    addTodoInput.value = ''
})

const createTodo = todoTitle => {
    const todoElement = document.createElement('li');
    const deleteTodoBtn = document.createElement('button');

    deleteTodoBtn.className = 'btn btn-danger';
    deleteTodoBtn.innerText = '×';

    todoElement.className = 'todo-list__todo list-group-item';
    todoElement.innerText = todoTitle;

    todoList.appendChild(todoElement);
    todoElement.appendChild(deleteTodoBtn);

    deleteTodoBtn.addEventListener('click', () => {
        todoList.removeChild(todoElement);
    })
}