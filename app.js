const input = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

let todos = JSON.parse(localStorage.getItem('myTodos')) || [];

function saveAndRender() {
    localStorage.setItem('myTodos', JSON.stringify(todos));
    render();
}

function render() {
    todoList.innerHTML = '';

    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        
        const span = document.createElement('span');
        span.textContent = todo.text;
        if (todo.completed) span.className = 'completed';
        span.addEventListener('click', () => {
            todos[index].completed = !todos[index].completed;
            saveAndRender();
        });

        const btn = document.createElement('button');
        btn.textContent = 'Ջնջել';
        btn.className = 'delete-btn';
        btn.addEventListener('click', () => {
            todos.splice(index, 1);
            saveAndRender();
        });

        li.appendChild(span);
        li.appendChild(btn);
        todoList.appendChild(li);
    });
}

addBtn.addEventListener('click', () => {
    const text = input.value.trim();
    if (text) {
        todos.push({ text: text, completed: false });
        input.value = '';
        saveAndRender();
    }
});

render();
