import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: `Hello`,
    },
    {
      id: 2,
      text: `world`,
    },
  ],
};

const todoSlice = createSlice({
  name: "todo", // name of slice
  initialState, // defines the initial state of the slice
  reducers: {
    //contains functions to modify the state of the initial state
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload, //payload is a object
      };
      state.todos.unshift(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload); //filtering the initial todo by filter
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions; //exporting functionality to use them in components to update state
export default todoSlice.reducer; //exporting the reducers to use it in store to make store aware about reducers
