import { ToDoItem } from "./ToDoItem"
import type { ToDo } from "./types/todo"

type Props = {
    todos: ToDo[]
    onDelete: (id: string) => void
    onToggle: (id: string) => void;
}
export const List: React.FC<Props> = ({ todos, onDelete, onToggle }) => {
    return (
        <div>
            <h3>List</h3>
            <div>
                {
                    todos.map(todo =>
                        <ToDoItem
                            key={todo.id}
                            todo={todo}
                            onDelete={onDelete}
                            onToggle = {onToggle}
                        />
                    )
                }
            </div>
        </div>
    )
}