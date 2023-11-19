/**
 * Component to map over list of tasks and display them
 */
import React from "react"
import { useSelector } from "react-redux"
import { TodoItem } from "./TodoItem"

export const TodoList = () => {
    // TODO: Map over tasklist
    return(
        <div className="todo-container">
            <TodoItem />
        </div>
    )
}