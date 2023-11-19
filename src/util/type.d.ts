type TodoType = {
  id: number;
  text: string;
  editStatus: boolean;
}
type State = {
  newTodo: string
  dataList: TodoType[]
  storage: TodoType[]
}
