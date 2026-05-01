import React from 'react';
import type { ToDo } from './types/todo';
import { Api } from '../utility/api';

type Props = {
  todo: ToDo;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
};
export const ToDoItem: React.FC<Props> = ({ todo, onDelete, onToggle }) => {
  const handleDelete = () => {
    Api.delete(`/todos/${todo.id}`).then(() => {
      onDelete(todo.id);
    });
  };

  return (
    <div>
      {(todo.completed && <s>{todo.text}</s>) || <span>{todo.text}</span>}
      <br />
      <button onClick={()=> onToggle(todo.id)}>
        {todo.completed ? 'Cancel' : 'Complete'}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
