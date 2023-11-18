import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, editTodo } from '../store/slice/todoSlice'

const DefalutButtonGroup = ({ id }) => {
  const dispatch = useDispatch()

  const handleEditTodo = (e) => {
    dispatch(editTodo(id))
  }

  const handleDeleteTodo = () => dispatch(deleteTodo(id))


  return (
    <>
      <button
        type='button'
        onClick={handleEditTodo}
      >
        編輯
      </button>
      <button
        type='button'
        onClick={handleDeleteTodo}
      >
        刪除
      </button>
    </>
  )
}

export default DefalutButtonGroup