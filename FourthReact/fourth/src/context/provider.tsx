import {useState} from "react"
import type  { FilterType, ToDo } from "./types";
import { ToDoContext } from "./context";
type  Props = {
  children: React.ReactNode;
}

export const ToDoService: React.FC<Props> = ({children}) => {
  const [todos, setTodos] = useState<ToDo[]> ([
    {
      id:101,
      text: "Watching a film",
      completed: false
    },
    {
      id:103,
      text: "Reading a book",
      completed: false
    }
  ]);
  function addToDo (todo: ToDo){
    setTodos([...todos,todo])
  }
  function deleteToDo (id: number){
    setTodos(todos.filter(todo => todo.id !== id))
  }
  function updateToDo (id: number){
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }
  const [filter, setFilter] = useState<FilterType>('all');
  return (
    <>
    <ToDoContext.Provider value={{todos, addToDo, deleteToDo, filter, setFilter, updateToDo}}>
      {children}

    </ToDoContext.Provider>
    
    </>
  )


}