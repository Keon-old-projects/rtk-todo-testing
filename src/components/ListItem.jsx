import { useSelector, useDispatch } from 'react-redux';
import { updateTodo } from '../store/slice/todoSlice';
import EditButtonGroup from './EditButtonGroup';
import DefalutButtonGroup from './DefalutButtonGroup';

const ListItem = ({ todo }) => {
  const dispatch = useDispatch()
  const storageList = useSelector(state => state.todoList.storage)
  const todoItem = storageList.find(item => item.id === todo.id)

  const handleUpdateTodo = (e) => {
    dispatch(updateTodo({
      ...todoItem,
      text: e.target.value
    }))
  }

  // console.log('ListItem', todo, storageList, todoItem);

  return (
    <li>
      <div>
        {todo.editStatus
          ? (<input
            type='text'
            value={todoItem.text}
            onChange={handleUpdateTodo}
          />)
          : todo.text
        }
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