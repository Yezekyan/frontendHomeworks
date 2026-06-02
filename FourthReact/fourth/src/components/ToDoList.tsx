import { useContext } from "react"
import { Add } from "./Add"
import { Filter } from "./Filter"
import { List } from "./List"
import { ToDoContext } from "../context/context"

export const ToDoList = () => {
  const context = useContext(ToDoContext);
  if(!context){
    throw new Error("Wrong place");
  }
  
  return (
    <>
    <div>
      <h3>ToDoList</h3>
      <Add/>
      <Filter/>
      <List/>
    </div>
    </>
  )
}