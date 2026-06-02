import { useContext } from 'react';
import { deleteUser, salaryDown, salaryUp } from '../context/actions';
import { UserContext } from '../context/user-context';

export const Flex = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('Flex must be used within a UserContext.Provider');
  }
  const {
    state: { users },
    dispatch,
  } = context;

  return (
    <div className="col-md-8">
      <h1 className="mb-4">Grid</h1>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {users.map((user) => (
          <div key={user.id} className="col">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <h5 className="card-title mb-0">{user.name}</h5>
                  <span className="badge bg-primary fs-6">{user.age}y</span>
                </div>

                <p className="card-text text-muted mb-3">
                  Salary:{' '}
                  <strong className="text-success">${user.salary}</strong>
                </p>

                <div className="mt-auto d-flex gap-2">
                  <button
                    type="button"
                    onClick={() => dispatch(deleteUser(user.id))}
                    className="btn btn-sm btn-outline-danger flex-fill"
                    aria-label={`Delete ${user.name}`}
                  >
                    Delete
                  </button>

                  <button
                    type="button"
                    onClick={() => dispatch(salaryUp(user.id))}
                    className="btn btn-sm btn-outline-secondary"
                    aria-label={`Salary up ${user.name}`}
                  >
                    +
                  </button>

                  <button
                    type="button"
                    onClick={() => dispatch(salaryDown(user.id))}
                    className="btn btn-sm btn-outline-secondary"
                    aria-label={`Salary down ${user.name}`}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
