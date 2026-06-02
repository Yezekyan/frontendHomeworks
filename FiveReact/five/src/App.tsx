import { useReducer } from 'react';
import { UserList } from './components/UserList';
import { UserContext } from './context/user-context';
import { reducer } from './context/reducer';
import initialState from './context/state';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <UserList />
    </UserContext.Provider>
  );
}
