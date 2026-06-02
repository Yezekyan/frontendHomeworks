import { REMOVE_USER, Salary_DOWN, Salary_UP } from "./action-types";
import type { Action, User,  } from "./types";

export const deleteUser = (id: number|string) : Action => {
  return {
    type: REMOVE_USER,
    payload: id,
  };
}
export const salaryUp = (id: number|string) : Action => {
  return {
    type: Salary_UP,
    payload: id,
  };
}
export const salaryDown = (id: number|string  ) : Action => {
  return {
    type: Salary_DOWN,
    payload: id,
  };
}

export const addUser = (user: User) : Action => {
  return {
    type: "ADD_USER",
    payload: user,
  };
}
