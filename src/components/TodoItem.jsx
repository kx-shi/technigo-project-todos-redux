/**
 * Component for one task/to-do
 * Actions:
 *  - Delete task
 *  - Mark task as complete/incomplete
 */
import React from "react"
import { useSelector, useDispatch } from "react-redux"

export const TodoItem = () => {
    // TODO: Add actions using dispatch
    return(
        <div className="todo-item">
            <h2>Short description of task</h2>
            <h3>Created: YYYY/MM/DD</h3>
        </div>
    )
}