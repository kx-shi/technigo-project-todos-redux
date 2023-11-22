import { createSlice } from "@reduxjs/toolkit";

let taskList = [
    { taskID: 1, description: 'Reply to Archies mail', timestamp: '2023-11-21, 21:00:44', isComplete: false},
    { taskID: 2, description: 'Call grandma', timestamp: '2023-06-21, 15:20:03', isComplete: true},
    { taskID: 3, description: 'Write on my book', timestamp: '2023-12-01, 06:08:45', isComplete: false},
]

const initialState = {
  taskList
}

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    /**
     * Use this action when a user creates a new task to do
     * The new task will be stored in the the `taskList` state
     * with the following values:
     * 
     *      description: A short description of the task
     *      taskID: The ID of the task
     *      timestamp: The timestamp of when the task was created
     *      isComplete: true/false if it is complete or not
     * 
     * When dispatching this action, you should pass an object as the payload,
     * in this case, the object only contains a `description` key
     */
    createTask: (state, action) => {
      const { taskID, description } = action.payload;
      const timestamp = new Date().toLocaleString();
      //console.log(`Recieved payload\nDescription: ${description}\ntaskID: ${taskID}\ntimestamp: ${timestamp}`);

      if (!description === "") { // TODO: Add error-handling in submit form
        throw new Error(
          "Could not detect a description for the task! Please make sure you have written a description"
        );
      };

      state.taskList.push({
        taskID: taskID,
        description,
        timestamp,
        isComplete: false
      });
    },

    /**
     * Use this action when a user mark a task as complete/incomplete
     * Note that this action can be used for both marking complete and incomplete
     * by toggling the `isComplete` property to !isComplete
     * 
     * When dispatching this action, you should pass taskID as payload
     */
    markTask: (state, action) => {
      const { taskID } = action.payload;

      // TODO: Find the task with corresponding taskID in taskList and
      //  modify that task's `isComplete` property
      let taskToMark = state.taskList.find((task) => task.taskID === taskID)
      taskToMark.isComplete = !taskToMark.isComplete
    },

    /**
     * Use this action when a user clicks on 'remove'-button
     * 
     * When dispatching this action, you should pass taskID as payload
     */
    removeTask: (state, action) => {
      const { taskID } = action.payload;
      state.taskList = state.taskList.filter((t) => t.taskID !== taskID);
    }
  }
});