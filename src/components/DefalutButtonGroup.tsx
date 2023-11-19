import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, editTodo } from '../store/slice/todoSlice'

type Props = {
  id:number
}
function DefalutButtonGroup({ id }:Props) {
  const dispatch = useDispatch()

  const handleEditTodo = () => {
    dispatch(editTodo(id))
  }

  const handleDeleteTodo = () => dispatch(deleteTodo(id))

  return (
    <div className="btn-group">
      <button
        type="button"
        onClick={handleEditTodo}
      >
        編輯
      </button>
      <button
        type="button"
        onClick={handleDeleteTodo}
      >
        刪除
      </button>
    </div>
  )
}

export default DefalutButtonGroup
