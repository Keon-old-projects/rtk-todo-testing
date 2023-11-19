import React from 'react'
import { useDispatch } from 'react-redux'
import { cancelEdit, saveEdit } from '../store/slice/todoSlice'

type Props = {
  id:number
}

function EditButtonGroup({ id }: Props) {
  const dispatch = useDispatch()

  const handleSaveEdit = () => dispatch(saveEdit(id))
  const handleCancelEdit = () => dispatch(cancelEdit(id))

  return (
    <>
      <button type="button" onClick={handleSaveEdit}>
        確認
      </button>
      <button type="button" onClick={handleCancelEdit}>
        取消
      </button>
    </>
  )
}

export default EditButtonGroup
