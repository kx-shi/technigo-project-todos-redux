import { createSlice } from "@reduxjs/toolkit";

// TODO: Add actions to alter the state of this object
const taskList = [
    { id: 1, text: 'Reply to Archies mail', createdDate: '', isComplete: false},
    { id: 2, text: 'Call grandma', createdDate: '', isComplete: true},
]

export const tasks = createSlice({
    name: 'tasks',
    initialState: taskList
})