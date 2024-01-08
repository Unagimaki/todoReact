export enum TodoActionTypes {
    ADD_TODO = 'ADD_TODO',
    REMOVE_TODO = 'REMOVE_TODO',
    TOGGLE_TODO = 'TOGGLE_TODO',
}
interface addTodoAction {
    type: TodoActionTypes.ADD_TODO
    todo: ITodo
}
interface removeTodoAction {
    type: TodoActionTypes.REMOVE_TODO
    id: Number
}
interface toggleTodoAction {
    type: TodoActionTypes.TOGGLE_TODO
    id: Number
}
export type TodoAction = addTodoAction | removeTodoAction | toggleTodoAction

export interface ITodo {
    title: any;
    id: Number;
    completed: Boolean;
}

export interface TodosState {
    todos: ITodo[];
    visibilityFilter: String
}