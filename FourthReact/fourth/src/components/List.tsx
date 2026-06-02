import { useContext } from "react";
import { ToDoContext } from "../context/context";
import { ToDoItem } from "./ToDoItem";

export const List = () => {
  const context = useContext(ToDoContext);
  if (!context) {
    throw new Error("Wrong place");
  }

  const filteredTodos = context.todos.filter(todo => {
    if (context.filter === 'completed') return todo.completed;
    if (context.filter === 'active') return !todo.completed;
    return true; 
  });

  return (
    <div>
      <div>
        {filteredTodos.map(todo => 
          <ToDoItem todo={todo} key={todo.id} />
        )}
      </div>
    </div>
  );
};