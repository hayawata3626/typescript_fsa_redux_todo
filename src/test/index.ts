import { Todo } from "../state/todoAppState"
import { Factory } from "rosie"

export const TodoItemFactory = Factory.define<Todo>("TodoItem")
  .attrs({
    id: 1,
    title: "Todo",
    selected: false,
    done: false
  })
  .sequence("id", index => index)
  .sequence("title", index => `title_${index}`)
