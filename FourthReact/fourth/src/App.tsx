import { ToDoList } from "./components/ToDoList"
import { ToDoService } from "./context/provider"

export const App = () => {
  return (
    <ToDoService>
      <ToDoList/>
    </ToDoService>
  )
}