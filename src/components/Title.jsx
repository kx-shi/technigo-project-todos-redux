/**
 * Component to display site title and how many tasks are incomplete
 */
import React from "react"
import { useSelector } from "react-redux"
import '../styles/Title.css';

export const Title = () => {
    const tasklist = useSelector((state) => state.tasks.taskList);
    const numIncompleteTasks = tasklist.filter((task) => !task.isComplete);

    return(
        <div className="todo-header">
            <h1>My To-do List</h1>
            <p>You've got {numIncompleteTasks.length} {numIncompleteTasks.length === 1 ? 'task' : 'tasks'} to do</p>
        </div>
    )
};