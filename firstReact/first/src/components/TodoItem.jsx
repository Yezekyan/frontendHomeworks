const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span>{todo.title}</span>
      <div>
        <button className="toggle-btn" onClick={() => onToggle(todo.id)}>
          {todo.completed ? 'Revert' : 'Complete'}
        </button>
        <button className="del-btn" onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;