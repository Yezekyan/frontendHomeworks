import { useContext } from "react";
import { ToDoContext } from "../context/context";
import type { ToDo } from "../context/types"

type Props = {
  todo: ToDo
}
export const ToDoItem:React.FC<Props> = ({ todo }) => {
  const context = useContext(ToDoContext);
  if(!context){
    throw new Error("Wrong place");
  }
  const { deleteToDo, updateToDo } = context;
  function deleteHandler(){
    deleteToDo(todo.id)
  }
  return (
    <>
    <div>
      <h3>{todo.text}</h3>
      <h3>{todo.completed ? "Completed" : "Active"}</h3>
      <button onClick={deleteHandler}>Delete</button>
      <button onClick={() => updateToDo(todo.id)}>Change type</button> 
    </div>
    </>
  )
}