import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { visibilityFilterReducer } from "./visibilityFilterReducer";

export const rootReducer = combineReducers({
    todos: todoReducer,
    filter: visibilityFilterReducer
})

export type RootState = ReturnType<typeof rootReducer>