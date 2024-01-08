import { useDispatch } from 'react-redux'
import { getCurrentDate } from '../../defaults'
import { filterTypes } from '../../types/filter'
import { IOption } from '../../types/select'
import Select from '../Select/Select'
import './Header.css'
import { setVisibilityFilterCreator } from '../../store/actionCreator/filter'
import { useTypesSelector } from '../../hooks/useTypesSelector'

interface HeaderProps {
    addTodo: () => void
}
const options: IOption[] = [
    {
        value: filterTypes.SHOW_ALL,
        label: 'Show All'
    },
    {
        value: filterTypes.SHOW_ACTIVE,
        label: 'Show active'
    },
    {
        value: filterTypes.SHOW_COMPLETED,
        label: 'Show completed'
    },
]

const Header: React.FC<HeaderProps> = ({addTodo}) => {
    const filter = useTypesSelector(state => state.filter)
    const dispatch = useDispatch()
    const currentFilter = () => {
        return options.find(item => item.value === filter)?.label
    }
    const optionHandler = (option: IOption) => {
        dispatch(setVisibilityFilterCreator(option.value))
    }
    currentFilter()
    return(
        <div className='header_container'>
            <b className="header_date">{getCurrentDate()}</b>
            <button onClick={() => addTodo()} className="header_button">Add todo</button>
            <Select optionHandler={optionHandler} placeholder={currentFilter()} options={options}/>
        </div>
    )
}

export default Header