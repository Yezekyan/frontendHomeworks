import { useEffect, useState } from 'react';
import { AddToDo } from './AddToDo';
import { FilterToDo } from './FilterToDo';
import { List } from './List';
import type { ToDo } from './types/todo';
import { Api } from '../utility/api';

export type FilterStatus = 'all' | 'active' | 'completed';

export const ToDoList = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [filter, setFilter] = useState<FilterStatus>('all');

  useEffect(() => {
    Api.get<ToDo[]>('/todos').then((response) => {
      setTodos(response.data);
    });
  }, []);

  const deleteToDo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const addToDo = (todo: ToDo) => {
    setTodos([...todos, todo]);
  };
  const handleToToggle = (id: string) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;

    const updated = { ...todo, completed: !todo.completed };

    Api.patch(`/todos/${id}`, { completed: updated.completed });

    setTodos(todos.map((t) => (t.id === id ? updated : t)));
  };
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div>
      <h3>ToDoList</h3>
      <AddToDo onAdd={addToDo} />
      <FilterToDo currentFilter={filter} onFilterChange={setFilter} />
      <List
        todos={filteredTodos}
        onDelete={deleteToDo}
        onToggle={handleToToggle}
      />
    </div>
  );
};
