import type { FilterStatus } from './ToDoList';

type Props = {
  currentFilter: FilterStatus;
  onFilterChange: (filter: FilterStatus) => void;
};

export const FilterToDo: React.FC<Props> = ({ currentFilter, onFilterChange }) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <button 
        disabled={currentFilter === 'all'} 
        onClick={() => onFilterChange('all')}
      >All</button>
      
      <button 
        disabled={currentFilter === 'active'} 
        onClick={() => onFilterChange('active')}
      >Active</button>
      
      <button 
        disabled={currentFilter === 'completed'} 
        onClick={() => onFilterChange('completed')}
      >Completed</button>
    </div>
  );
};