import { useEffect, useState } from 'react';
import AddUser from './components/AddUser';
import UserList from './components/UserList';
import axios from 'axios';

export default function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:4002/users')
      .then((info) => {
        return info.data;
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  function addUser(user) {
    setUsers([...users, user]);
  }
  function handleDelete(user) {
    axios.delete(`http://localhost:4002/users/${user.id}`);
    const updatedUsers = users.filter((us) => us.id !== user.id);
    setUsers(updatedUsers);
  }

  return (
    <div className="container">
      <div className="row my-4">
        <UserList onDelete={handleDelete} users={users} />
        <AddUser addUser={addUser} />
      </div>
    </div>
  );
}
