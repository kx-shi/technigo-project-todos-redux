/**
 * Component for one task/to-do
 * Actions:
 *  - Delete task
 *  - Mark task as complete/incomplete
 */
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { tasks } from "../reducers/tasks";
import '../styles/TodoItem.css';

export const TodoItem = ( {task} ) => {
    const [isHovered, setIsHovered] = useState(false);
    const dispatch = useDispatch();

    const removeTask = () => {
        console.log(`Trying to remove task '${task.description}' with taskID ${task.taskID}`);
        dispatch(tasks.actions.removeTask({ taskID: task.taskID }));
    };

    // TODO: Add new dispatch to mark task as complete/incomplete
    const markTask = () => {
        console.log(`Trying to mark task '${task.description}' with taskID ${task.taskID}`);
        // add dispatch function
    }

    return(
        <div 
            className={`todo-item ${isHovered ? 'item-hovered' : 'item-not-hovered'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`todo-description ${task.isComplete ? 'task-complete' : 'task-incomple'}`}>
                <h2>{task.description}</h2>
                <h3>Created: {task.timestamp}</h3>
            </div>
            {
                // TODO: Add complete/incomplete interactive text
            }
            <button className={isHovered ? 'show' : 'hidden'} onClick={removeTask}>❌</button>
        </div>
    );
};