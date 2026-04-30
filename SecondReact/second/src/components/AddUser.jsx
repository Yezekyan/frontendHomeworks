import { useState } from 'react';
import axios from 'axios';

export default function AddUser({ addUser }) {
  const [form, setForm] = useState({ name: '', email: '' });
  const [error, setError] = useState('');
  function handleSubmit() {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    event.preventDefault();
    if (!form.name.trim() && !form.email.trim()) {
      setError('Please fill name and email');
      return;
    }
    if (!form.name.trim()) {
      setError('Please fill name');
      return;
    }
    if (!form.email.trim()) {
      setError('Please fill email');
      return;
    }
    if (!regex.test(form.email)) {
      setError('Please fill with valid email');
      return;
    }
    axios
      .post('http://localhost:4002/users', form)
      .then((response) => addUser(response.data))
      .catch(() => setError('Failed to add user'));
    setError('');
    setForm({ name: '', email: '' });
  }
  return (
    <div className="col-md-5">
      <h1>Add User</h1>
      {error && <p className="text-danger">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            value={form.name}
            onChange={(e) => {
              setForm({ ...form, name: e.target.value });
            }}
            className="form-control"
            type="text"
          />
        </div>
        <div>
          <label>Email</label>
          <input
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
            className="form-control"
            type="text"
          />
        </div>
        <div>
          <button className="btn btn-outline-dark my-2 ">Save</button>
        </div>
      </form>
    </div>
  );
}
