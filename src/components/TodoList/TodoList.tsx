import React, { useEffect, useState } from "react";
import { useTypesSelector } from "../../hooks/useTypesSelector";
import TodoItem from "../TodoItem/TodoItem";
import { useDispatch } from "react-redux";
import { deleteTodoCreator, toggleTodoCreator } from "../../store/actionCreator/todos";
import './TodoList.css'
import { filterTypes } from "../../types/filter";

const TodoList: React.FC = () => {
    const dispatch = useDispatch()
    const {todos} = useTypesSelector(state => state.todos)
    const filter = useTypesSelector(state => state.filter)
    const [todoList, setTodoList] = useState(todos)

    useEffect(() => {
        resultTodos()
    }, [todos, filter])

    const resultTodos = () => {
        filter === filterTypes.SHOW_ACTIVE ? setTodoList(todos.filter(todo => !todo.completed)) :
        filter === filterTypes.SHOW_COMPLETED ? setTodoList(todos.filter(todo => todo.completed)) :
        setTodoList(todos)       
    }

    const toggleTodo = (id: Number) => {
        dispatch(toggleTodoCreator(id))
    }
    const deleteTodo = (id: Number) => {
        dispatch(deleteTodoCreator(id))
    }
    
    return(
        <div className="todoList_container">
            {
                todoList.length ? 
                todoList.map((todo, index) => {
                    return <TodoItem
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo}
                        index={index+1}
                        todo={todo}
                        key={index}
                    />
                })
                : 'Empty list'
            }
        </div>
    )
}

export default TodoList