// React / Redux imports
import React from "react";
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { tasks } from './reducers/tasks'

// Components imports
import { InputNewTodo } from "./components/InputNewTodo";
import { Title } from "./components/Title";
import { TodoList } from "./components/TodoList";

// TODO: When several reducers exists, combine them into 'one'
const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <div className="todo-container">
        <Title />
        <InputNewTodo />
        <TodoList />
      </div>
    </Provider>
  );
};
