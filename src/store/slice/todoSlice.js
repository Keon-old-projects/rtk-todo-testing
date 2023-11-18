import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    dataList: [
      {
        id: new Date().getTime(),
        text: '這是一段話ㄛ',
        editStatus: false,
      },
    ],
    storage: []
  },
  reducers: {
    addTodo(state, action) {
      state.dataList.push(action.payload)
    },
    deleteTodo: (state, action) => {
      const { dataList } = state
      const newList = dataList.filter(item => item.id !== action.payload)
      state.dataList = newList
    },
    editTodo(state, action) {
      const { dataList } = state
      const index = dataList.findIndex(item => item.id === action.payload)
      const newData = {
        id: dataList[index].id,
        text: dataList[index].text,
        editStatus: false
      }
      state.dataList[index] = { ...newData, editStatus: true }
      state.storage.push(newData)
    },
    updateTodo(state, action) {
      const { storage } = state
      const index = storage.findIndex(item => item.id === action.payload.id)
      state.storage[index] = { ...storage[index], text: action.payload.text }
    },
    saveEdit(state, action) {
      const { dataList, storage } = state
      const dataListIndex = dataList.findIndex(item => item.id === action.payload)
      const storageIndex = dataList.findIndex(item => item.id === action.payload)
      const storageItem = storage.find(item => item.id === action.payload)
      state.dataList[dataListIndex] = { ...storageItem }
      console.log(`state.dataList[dataListIndex]`, state.dataList[dataListIndex]);
      state.storage.splice(storageIndex, 1)
    },
    cancelEdit(state, action) {
      const { dataList } = state
      const dataListIndex = dataList.findIndex(item => item.id === action.payload)
      const storageIndex = dataList.findIndex(item => item.id === action.payload)
      const itemData = dataList[dataListIndex]
      state.dataList[dataListIndex] = { ...itemData, editStatus: false }
      state.storage.splice(storageIndex, 1)
    },
  }
})

export const { addTodo, deleteTodo, updateTodo, editTodo, saveEdit, cancelEdit } = todoSlice.actions

export default todoSlice.reducer