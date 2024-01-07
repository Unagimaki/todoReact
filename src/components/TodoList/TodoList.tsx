import React from "react";
import { useTypesSelector } from "../../hooks/useTypesSelector";
import TodoItem from "../TodoItem/TodoItem";
import { useDispatch } from "react-redux";
import { deleteTodoCreator, toggleTodoCreator } from "../../store/actionCreator/todos";
import './TodoList.css'

const TodoList: React.FC = () => {
    const {todos} = useTypesSelector(state => state.todos)
    const dispatch = useDispatch()

    const toggleTodo = (id: Number) => {
        dispatch(toggleTodoCreator(id))
    }
    const deleteTodo = (id: Number) => {
        dispatch(deleteTodoCreator(id))
    }
    
    return(
        <div className="todoList_container">
            {
                todos.length ? 
                todos.map((todo, index) => {
                    return <TodoItem
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo}
                        index={index+1}
                        todo={todo}
                        key={todo.id}
                    />
                })
                : 'Empty list'
            }
        </div>
    )
}

export default TodoList