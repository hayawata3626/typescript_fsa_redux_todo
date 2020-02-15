import { TodoAppState } from "../state/todoAppState"
import produce, { Draft } from "immer"
import { deprecated } from "typesafe-actions"
const { createStandardAction } = deprecated

type Payload = {
  id: number
  title: string
}

export const changeTodoTitle = createStandardAction("changeTodoTitle")<
  Payload
>()

export const changeTaskTitleReducer = (
  state: TodoAppState,
  { payload: { id, title } }: { payload: Payload }
): TodoAppState =>
  produce(state, (draftState: Draft<TodoAppState>) => {
    draftState.todoList.byId[id].title = title
  })
