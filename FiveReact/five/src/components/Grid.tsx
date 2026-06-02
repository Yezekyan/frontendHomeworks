import { useContext } from "react";
import { UserContext } from "../context/user-context";
import {deleteUser,  salaryDown, salaryUp } from "../context/actions";

export const Grid = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Grid must be used within a UserContext.Provider");
  }
  const {state: {users}, dispatch } = context;
  return (
    <div className="col-md-8">
      <h1>Grid</h1>
      <table className="table  table-bordered table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.salary}</td>
              <td>
                <button onClick={() => dispatch(deleteUser(user.id))} className="btn btn-danger mx-2">Delete</button>
                <button onClick={() => dispatch(salaryUp(user.id))} className="btn btn-secondary mx-2">Salary Up</button>
                <button onClick={() => dispatch(salaryDown(user.id))} className="btn btn-secondary mx-2">Salary Down</button>
              </td>
            </tr>
          ))}


        </tbody>
      </table>
    </div>
  );
};