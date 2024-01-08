import React, { useState } from "react"
import './Select.css'
import { IOption } from "../../types/select"

export interface SelectProps {
    placeholder?: any,
    options: IOption[],
    optionHandler: (selection: IOption) => void
}
const Select: React.FC<SelectProps> = ({placeholder, options, optionHandler}) => {
    const [showOptions, setShowOptions] = useState(false)
    const changeOptionState = () => {
        setShowOptions(!showOptions)

    }
    return(
        <>
            <div onClick={changeOptionState} className="select_container">
                <span>{placeholder}</span>
            </div>
            {
                showOptions && 
                <div className="options">
                    {
                        options.map(option => {
                            return <div className="option_item" onClick={() => {changeOptionState(); optionHandler(option)}} key={option.value}>{option.label}</div>
                        })
                    }
                </div>
            }
           
        </>
    )
}

export default Select