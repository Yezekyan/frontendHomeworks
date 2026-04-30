import  { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import List from './components/List';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=6')
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  const addTodo = (title) => {
    const newTodo = { id: Date.now(), title, completed: false };
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id) => setTodos(todos.filter(t => t.id !== id));
  
  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const bulkAction = (action) => {
    if (action === 'delete') setTodos([]);
    else if (action === 'complete') setTodos(todos.map(t => ({ ...t, completed: true })));
    else if (action === 'revert') setTodos(todos.map(t => ({ ...t, completed: false })));
  };

  return (
    <div className="todo-container">
      <h1>My To-Do List</h1>
      <AddTodo onAdd={addTodo} />
      
      <div className="btn-group">
        <button className="del-btn" onClick={() => bulkAction('delete')}>Delete All</button>
        <button onClick={() => bulkAction('complete')}>Complete All</button>
        <button onClick={() => bulkAction('revert')}>Revert All</button>
      </div>

      <List todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
    </div>
  );
};

export default TodoList;