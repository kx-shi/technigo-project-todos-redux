/**
 * Component with a text input to create new todo items
 * Dispatch AddTodo
 */
import React from "react"
import { useSelector, useDispatch } from "react-redux"

export const InputNewTodo = () => {
  // TODO: Create text input component, attach dispatch to it
  return(
    <div className="todo-input">
      <p>write a new to-do...</p>
      <input type="text" placeholder="to-do..."></input>
    </div>
  )
};