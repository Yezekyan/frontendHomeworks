import { ADD_USER, REMOVE_USER, Salary_DOWN, Salary_UP } from './action-types';
export interface User {
  id: number | string;
  name: string;
  age: number;
  salary: number;
}

export interface State {
  users: User[];
}

export interface Context {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export type ActionType =
  | typeof ADD_USER
  | typeof REMOVE_USER
  | typeof Salary_UP
  | typeof Salary_DOWN;

export interface Action {
  type: ActionType;
  payload: unknown;
}

export type DisplayMode = 'flex' | 'grid';
