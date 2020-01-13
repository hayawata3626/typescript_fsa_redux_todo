import { storiesOf } from "@storybook/react"
import React from "react"
import { TodoList } from "../component/TodoList"
import { FilterType } from "../state/todoAppState"
import { Provider } from "react-redux"
import { store } from "../store"

storiesOf("TodoList", module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add("通常", () => {
    return (
      <TodoList
        todoList={[
          { id: 1, title: "買い物へ行く", done: false, selected: false },
          { id: 2, title: "銀行へ行く", done: false, selected: false }
        ]}
        filterType={FilterType.Active}
      />
    )
  })
