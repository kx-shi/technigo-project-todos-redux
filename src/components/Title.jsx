/**
 * Component to display site title and how many tasks are incomplete
 */
import React from "react"
import { useSelector } from "react-redux"

export const Title = () => {
    // TODO: Create selector to calculate amount of incomplete tasks
    return(
        <div className="header">
            <h1>My To-do List</h1>
            <p>You've got X amounts of tasks to do</p>
        </div>
    )
}