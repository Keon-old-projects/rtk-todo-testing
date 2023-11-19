import { useSelector, useDispatch } from 'react-redux'
import { newTodo, addTodo } from './store/slice/todoSlice'
import ListItem from './components/ListItem'
import { RootState } from './store'
import './style/App.css'

function TodoList() {
  const todoList = useSelector((state:RootState) => state.todoList.dataList)
  const newTodoValue = useSelector((state:RootState) => state.todoList.newTodo)
  const dispatch = useDispatch()

  const hanldeAddTodo = () => {
    if (newTodoValue) {
      dispatch(addTodo({
        id: new Date().getTime(),
        text: newTodoValue,
        editStatus: false,
      }))
      dispatch(newTodo(''))
    } else {
      alert('請輸入任務')
    }
  }

  return (
    <div>
      <input
        type="text"
        value={newTodoValue}
        onChange={(event) => {
          const { value } = event.target
          dispatch(newTodo(value))
        }}
      />
      <button type="button" onClick={hanldeAddTodo}>
        Add Todo
      </button>
      <ul>
        {todoList.map((todo) => (
          <ListItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
