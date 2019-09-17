import * as React from "react"
import { Todo } from "../state/todoAppState"
import { TodoItemContainer } from "../container/TodoItemContainer"

type Props = {
  todoList: ReadonlyArray<Todo>
}

export const TodoList = ({ todoList }: Props) => (
  <div style={{ marginTop: "90px" }}>
    {todoList.map((todo, index) => (
      <TodoItemContainer todo={todo} key={index} />
    ))}
  </div>
)
