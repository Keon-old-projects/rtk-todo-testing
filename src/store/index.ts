import { configureStore } from '@reduxjs/toolkit'
import todoList from './slice/todoSlice'

export const store = configureStore({
  reducer: {
    todoList,
  },
})

export type RootState = ReturnType<typeof store.getState>

// export type RootState = {
//   todoList: State
// }
