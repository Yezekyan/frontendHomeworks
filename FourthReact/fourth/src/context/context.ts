import React from "react";
import type { Context} from "./types";


export const ToDoContext = React.createContext<Context | undefined >(undefined)