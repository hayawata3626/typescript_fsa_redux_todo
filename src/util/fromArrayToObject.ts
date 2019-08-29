import { Todo } from "../state/todoAppState"

export const fromArrayToObject = (arr: ReadonlyArray<Todo>): ItemsById =>
  arr.reduce((obj: any, data: Todo) => {
    obj[data.id] = data
    return obj
  }, {})

type ItemsById = {
  [Key: number]: Todo
}
