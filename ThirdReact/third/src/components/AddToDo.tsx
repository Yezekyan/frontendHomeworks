import { useState } from 'react';
import { Api } from '../utility/api';
import type { ToDo } from './types/todo';

type Props = {
  onAdd: (todo: ToDo) => void;
};

export const AddToDo: React.FC<Props> = ({ onAdd }) => {
  const [data, setData] = useState<string>('');
  const [error, setError] = useState<string>('');
  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!data.trim()) {
      setError('Please fill the field');
      return;
    }
    Api.post('/todos', { text: data, completed: false }).then((response) => {
      onAdd(response.data);
      setData('');
      setError('');
    });
  };
  return (
    <div>
      <h3>AddToDo</h3>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Todo Name</label>
        <input
          onChange={(e) => setData(e.target.value)}
          value={data}
          type="text"
        />
        <button>Click</button>
      </form>
    </div>
  );
};
