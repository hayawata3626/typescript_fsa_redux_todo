import { TodoAppState } from "../state/todoAppState"
import produce, { Draft } from "immer"
import { deprecated } from "typesafe-actions"
const { createStandardAction } = deprecated

type Payload = {
  title: string
}

export const changeTitleOfAddTodoModal = createStandardAction(
  "changeTitleOfAddTodoModal"
)<Payload>()

export const changeTitleOfAddTodoModalReducer = (
  state: TodoAppState,
  { payload: { title } }: { payload: Payload }
): TodoAppState =>
  produce(state, (draftState: Draft<TodoAppState>) => {
    draftState.addTodoModal.title = title
  })
