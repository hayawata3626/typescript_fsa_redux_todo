import { storiesOf } from "@storybook/react"
import { TodoItem } from "../component/TodoItem"
import { action } from "@storybook/addon-actions"
import React from "react"

storiesOf("TodoItem", module).add("通常", () => {
  return (
    <TodoItem
      todo={{ id: 1, title: "買い物へ行く", done: false, selected: false }}
      onChangeTitle={action("change title")}
      onCheckedChange={action("check item")}
      onDeleteIconClick={action("delete item")}
      onItemSelect={action("select item")}
    />
  )
})
