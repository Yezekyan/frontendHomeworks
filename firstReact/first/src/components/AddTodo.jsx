import  { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleAdd = () => {
    if (text.trim() === '') {
      setError('Input-ը չի կարող դատարկ լինել');
    } else {
      onAdd(text);
      setText('');
      setError('');
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        placeholder="Նոր առաջադրանք..."
      />
      <button className="add-btn" onClick={handleAdd}>Add</button>
      {error && <div className="error-msg">{error}</div>}
    </div>
  );
};

export default AddTodo;