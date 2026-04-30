export default function UserList({users,onDelete}) {

  return (
    <div className="col-md-7">
      <h1>User List</h1>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user)=> 
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={()=>onDelete(user)} className="btn btn-primary">Delete</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}
