import { useContext } from "react";
import { ToDoContext } from "../context/context";

export const Filter = () => {
  const context = useContext(ToDoContext);
  if (!context) {
    throw new Error("Wrong place");
  }

  return (
    <div>
      <button onClick={() => context.setFilter('all')}>All</button>
      <button onClick={() => context.setFilter('completed')}>Completed</button>
      <button onClick={() => context.setFilter('active')}>Active</button>
    </div>
  );
};