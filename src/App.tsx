import React from "react"
import "./App.css"
import { TodoList } from "./component/TodoList"
import { useSelector } from "react-redux"
import { todoListSelector } from "./selector"

const App: React.FC = () => {
  const todoList = useSelector(todoListSelector)

  return (
    <div className="App">
      <TodoList todoList={todoList} />
    </div>
  )
}

export default App
