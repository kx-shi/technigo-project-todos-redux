/**
 * Component to map over list of tasks and display them
 */
import React, { useId } from "react"
import { useSelector } from "react-redux"
import { TodoItem } from "./TodoItem"
import '../styles/TodoList.css';

export const TodoList = () => {
    const tasklist = useSelector((state) => state.tasks.taskList);

    return(
        <div className="todo-list">
          {tasklist.map((task, index) => (
            <TodoItem key={index} task={task} />
          ))}
        </div>
    )
}