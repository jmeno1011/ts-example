import { combineReducers } from "@reduxjs/toolkit";
import counter from "./counter";
import todos from "./todolist";

const rootReducer = combineReducers({
  counter,
  todos
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;