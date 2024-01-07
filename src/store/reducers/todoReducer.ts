import { TodoAction, TodoActionTypes, TodosState } from "../../types/todo"

const initialState: TodosState = {
    todos: [],
    visibilityFilter: 'SHOW_ALL'
}

export const todoReducer = (state = initialState, action: TodoAction) => {
    switch (action.type) {
        case TodoActionTypes.ADD_TODO:
            return {...state, todos: [...state.todos, action.todo]}
        case TodoActionTypes.REMOVE_TODO:
            return {...state, todos: state.todos.filter(todo => todo.id !== action.id)}
        case TodoActionTypes.TOGGLE_TODO:
            return {...state, todos: state.todos.map(todo => todo.id === action.id ? (todo.completed = !todo.completed, todo) : todo)}    
        default:
            return state;
    }
}