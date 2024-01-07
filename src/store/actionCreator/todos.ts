import { ITodo, TodoActionTypes } from "../../types/todo"

export const addTodoCreator = (todo: ITodo) => {
    return {
        type: TodoActionTypes.ADD_TODO,
        todo
    }
}
export const toggleTodoCreator = (id: Number) => {
    return {
        type: TodoActionTypes.TOGGLE_TODO,
        id
    }
}
export const deleteTodoCreator = (id: Number) => {
    return {
        type: TodoActionTypes.REMOVE_TODO,
        id
    }
}