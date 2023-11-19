import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'src/store'
import { updateTodo } from '../store/slice/todoSlice'
import EditButtonGroup from './EditButtonGroup'
import DefalutButtonGroup from './DefalutButtonGroup'

type Props = {
  todo: TodoType
}
function ListItem({ todo }: Props) {
  const dispatch = useDispatch()
  const storageList = useSelector((state:RootState) => state.todoList.storage)
  const todoItem = storageList.find((item) => item.id === todo.id) as TodoType

  const handleUpdateTodo = (e:React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateTodo({
      ...todoItem,
      text: e.target.value,
    }))
  }

  // console.log('ListItem', todo, storageList, todoItem);

  return (
    <li>
      <div className="list-item-content">
        {todo.editStatus
          ? (
            <input
              type="text"
              value={todoItem.text}
              onChange={handleUpdateTodo}
            />
          )
          : todo.text}
        {
          todo.editStatus
            ? <EditButtonGroup id={todo.id} />
            : <DefalutButtonGroup id={todo.id} />
        }
      </div>
    </li>
  )
}

export default ListItem
