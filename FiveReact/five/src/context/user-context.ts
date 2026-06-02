import type {Context} from "./types";
import React from "react"; 

export const UserContext = React.createContext<Context | undefined>(undefined);