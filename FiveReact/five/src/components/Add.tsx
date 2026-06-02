import { useContext } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { addUser } from '../context/actions';
import type { User } from '../context/types';
import { UserContext } from '../context/user-context';

export const Add = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('Add must be used within a UserContext.Provider');
  }
  const { dispatch } = context;

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<User>();

  const add: SubmitHandler<User> = (data) => {
    const newUser: User = {
      ...data,
      id: crypto.randomUUID(),
    };

    dispatch(addUser(newUser));
    reset();
  };

  return (
    <div className="col-md-4">
      <h1>Add</h1>
      <form onSubmit={handleSubmit(add)}>
        <div className="mb-3">
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            {...register('name', { required: 'please fill in the name' })}
          />
        </div>
        <div className="mb-3">
          {errors.age && <p className="text-danger">{errors.age.message}</p>}
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            {...register('age', {
              required: 'please fill in the age',
              setValueAs: (v) => Number(v),
            })}
          />
        </div>
        <div className="mb-3">
          {errors.salary && (
            <p className="text-danger">{errors.salary.message}</p>
          )}
          <label className="form-label">Salary</label>
          <input
            type="number"
            className="form-control"
            {...register('salary', {
              required: 'please fill in the salary',
              setValueAs: (v) => Number(v),
              min: { value: 0, message: 'salary cannot be negative' },
            })}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
