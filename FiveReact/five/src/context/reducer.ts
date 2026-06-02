import { ADD_USER, REMOVE_USER, Salary_DOWN, Salary_UP } from './action-types';
import type { Action, State, User } from './types';

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload as User],
      };
    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };

    case Salary_UP:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload) {
            return { ...user, salary: user.salary + 1000 };
          }
          return user;
        }),
      };

    case Salary_DOWN:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload) {
            const newSalary = user.salary - 1000;
            if (newSalary >= 0) {
              return { ...user, salary: newSalary };
            }
            return user;
          }
          return user;
        }),
      };
    default:
      return state;
  }
};
