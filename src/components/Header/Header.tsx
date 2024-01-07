import React from "react";
import './Header.css'


interface HeaderProps {
    addTodo: () => void
}

const Header: React.FC<HeaderProps> = ({addTodo}) => {
    const getCurrentDate = () => {
        const date: any = new Date()
        const month = date.toLocaleString('en-US', { month: 'long' })
        const day = date.getDate()
        const year = date.getFullYear()
        const currentDay: String = `${month} ${day}, ${year}` 
        return currentDay
    }
    getCurrentDate()

    return(
        <div className='header_container'>
            <b className="header_date">{getCurrentDate()}</b>
            <button onClick={() => addTodo()} className="header_button">Add todo</button>
        </div>
    )
}

export default Header