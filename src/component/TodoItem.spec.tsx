import { TodoItem } from "./TodoItem"
import { render, fireEvent } from "@testing-library/react"
import React from "react"
import { matchers } from "jest-emotion"

expect.extend(matchers)

describe("TodoItem", () => {
  const onItemSelect = jest.fn()
  const onCheckedChange = jest.fn()
  const onChangeTitle = jest.fn()
  const onDeleteIconClick = jest.fn()
  describe("クリックした場合", () => {
    const { debug, getByTestId } = render(
      <TodoItem
        todo={{
          id: 1,
          title: "ラーメン食べる",
          done: false,
          selected: false
        }}
        onItemSelect={onItemSelect}
        onCheckedChange={onCheckedChange}
        onChangeTitle={onChangeTitle}
        onDeleteIconClick={onDeleteIconClick}
      />
    )
    it("枠線がつくこと", () => {
      fireEvent.click(getByTestId("todo"))
      debug()
      expect(getByTestId("todo")).toHaveStyleRule("border", "blue")
    })
  })
})
