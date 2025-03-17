import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello World",
      expense: 500,
    },
  ],
  editTodo: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload.text,
        expense: action.payload.expense,
      };
      state.todos.unshift(todo);
    },

    updateTodo: (state, action) => {
      // console.log(action.payload);

      const todo = state.todos.find((todo) => todo.id == action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
        todo.expense = action.payload.expense;

        state.editTodo = null;
      }
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((elm) => elm.id != action.payload.id);
    },

    removeAll: (state, action) => {
      state.todos = [];
      //   action param is not used so we can just remove it
    },

    setEditTodo: (state, action) => {
      state.editTodo = action.payload;
    },
  },
});

export const { addTodo, updateTodo, removeTodo, removeAll, setEditTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
