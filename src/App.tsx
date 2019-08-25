import React from "react"
import "./App.css"
import { TodoList } from "./component/TodoList"
import { initialState } from "./states/todoAppState"

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoList todoList={initialState.todoList} />
    </div>
  )
}

export default App
