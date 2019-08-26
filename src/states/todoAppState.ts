import { reducerWithInitialState } from "typescript-fsa-reducers"
import { todoAppActions } from "../actions/todoAppActions"
import { changeTaskTitleReducer } from "../reducer/changeTaskTitle"
import { changeSelect } from "../reducer/changeSelect"

export type Todo = Readonly<{
  id: number
  title: string
  done: boolean
  selected: boolean
}>

export type TodoAppState = Readonly<{
  todoList: ReadonlyArray<Todo> | []
}>

export const initialState: TodoAppState = {
  todoList: [
    {
      id: 1,
      title: "ラーメン食べる",
      selected: false,
      done: false
    },
    {
      id: 2,
      title: "髪を切る",
      selected: false,
      done: false
    }
  ]
}

export const todoReducer = reducerWithInitialState(initialState)
  .case(todoAppActions.changeTodoTitle, changeTaskTitleReducer)
  .case(todoAppActions.changeSelect, changeSelect)
