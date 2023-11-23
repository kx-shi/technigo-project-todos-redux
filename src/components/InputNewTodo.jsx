/**
 * Component with a text input to create new todo items
 * Dispatch createTask
 */
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { tasks } from "../reducers/tasks";
import { v4 as uuidv4 } from 'uuid';
import '../styles/InputNewTodo.css';

export const InputNewTodo = () => {
  const [description, setDescription] = useState('');
  const [charsLeft, setCharsLeft] = useState(50);
  const dispatch = useDispatch()

  const updateTextInput = (e) => {
    setDescription(e.target.value)
    setCharsLeft(50-e.target.value.length)
  }

  const createTask = (e) => {
    e.preventDefault();
    console.log(description)
    if(description === "") {
      alert("Cannot have empty description for new to-do!");
    }else if(description.length > 50) {
      alert("Description of to-do is too long!");
    }else {
      // dispatch
      dispatch(tasks.actions.createTask({ taskID: uuidv4(), description: description }));
    }
    setDescription('');
    setCharsLeft(50);
  }

  return(
    <div className="todo-input">
      <p>write a new to-do...</p>
      <form className="todo-form" onSubmit={createTask}>
        <input type="text" onChange={updateTextInput} placeholder="to-do..." value={description}/>
        <button type="submit" className="plus-btn">+</button>
      </form>
      <p>{charsLeft} characters left</p>
    </div>
  )
};