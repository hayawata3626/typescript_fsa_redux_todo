import { TodoJsonModel } from "../../api"
import { Todo } from "../state/todoAppState"

/* apiから取得したjsonをstateの型に合わせて変換 */
export const toVersion = (todo: TodoJsonModel): Todo => ({
  id: todo.id,
  title: todo.body,
  done: false,
  selected: false,
  candidateOfTodoList: []
})
