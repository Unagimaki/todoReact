import { useDispatch } from "react-redux";
import { ITodo } from "./types/todo";
import { addTodoCreator } from "./store/actionCreator/todos";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";
import './App.css'

function App() {
const dispatch = useDispatch()

const addTodo = () => {
  const title = prompt('')
  const todo: ITodo = {
    title: title,
    id: Math.random(),
    completed: false
  }
  title && dispatch(addTodoCreator(todo))
}
  return (
    <div>
      <Header addTodo={addTodo}/>
      <TodoList/>
    </div>
  );
}

export default App;
