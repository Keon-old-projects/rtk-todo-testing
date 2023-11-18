import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from "./store/slice/todoSlice";
import ListItem from './components/ListItem';


function TodoList() {
  const todoList = useSelector(state => state.todoList.dataList)
  const dispatch = useDispatch()

  const hanldeAddTodo = (event) => {
    const { value } = event.target.previousElementSibling
    if (value) {
      dispatch(addTodo({
        id: new Date().getTime(),
        text: value,
        editStatus: false
      }))
      event.target.previousElementSibling.value = ""
    } else {
      alert("請輸入任務")
    }
  }


  return (
    <div>
      <input type='text' />
      <button type='button' onClick={hanldeAddTodo}>
        Add Todo
      </button>
      <ul>
        {todoList.map((todo) => (
          <ListItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
