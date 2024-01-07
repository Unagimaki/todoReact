import React from "react";
import { ITodo } from "../../types/todo";
import './TodoItem.css'

interface TodoItemProps {
    todo: ITodo
    index: number
    toggleTodo: (id: Number) => void
    deleteTodo: (id: Number) => void
}


const TodoItem: React.FC<TodoItemProps> = ({todo, index, toggleTodo, deleteTodo}) => {
    return(
        <div style={{opacity: todo.completed ? '.3' : '1'}} onClick={() => toggleTodo(todo.id)} className="todoItem">
            <div className="todoItem_text">
                <b>{index}.</b> 
                <div>{todo.title}</div>            
            </div>
            <div onClick={() => deleteTodo(todo.id)}>&times;</div>            
        </div>
    )
}

export default TodoItem