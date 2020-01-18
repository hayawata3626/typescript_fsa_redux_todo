import { Todo } from "../state/todoAppState"
import { Factory } from "rosie"

export const TodoItemFactory = Factory.define<Todo>("TodoItem")
  .sequence("id", index => index)
  .sequence("title", index => `title_${index}`)
  .attrs({
    selected: false,
    done: false
  })
