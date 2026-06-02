export type FilterType = 'all' | 'completed' | 'active';
export interface ToDo {
  id: number 
  text: string
  completed: boolean
}
export interface Context {
  todos: ToDo[]
  addToDo : (todo: ToDo) => void
  deleteToDo : (id: number) => void
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
  updateToDo : (id: number) => void

}