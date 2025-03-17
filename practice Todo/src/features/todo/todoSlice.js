import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todoList: [
    {
      id: nanoid(),
      expenseName: "try",
      expenseAmount: 0,
      status: "true",
    },
    {
      id: nanoid(),
      expenseName: "try2",
      expenseAmount: 100,
      status: "false",
    },
  ],

  currentSelected: null,
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    // add Todo
    addTodo: (state, action) => {
      console.log(state.todoList);

      const todo = {
        id: nanoid(),
        expenseName: action.payload.expenseName,
        expenseAmount: action.payload.expenseAmount,
        status: action.payload.status,
      };
      state.todoList.unshift(todo);
    },

    // remove todo
    removeTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (elm) => elm.id != action.payload.id
      );
    },

    // update Todo
    updateTodo: (state, action) => {
      const selectedTodoId = state.currentSelected.id;
      const todoUpdateElm = state.todoList.find(
        (elm) => elm.id === selectedTodoId
      );
      if (todoUpdateElm) {
        todoUpdateElm.expenseName = action.payload.expenseName;
        todoUpdateElm.expenseAmount = action.payload.expenseAmount;
        todoUpdateElm.status = action.payload.status;
        state.currentSelected = null;
      }
    },

    //set selectedTodo
    setSelectedTodo: (state, action) => {
      state.currentSelected = action.payload;
    },

    //remove all todo
    removeAllTodo: (state) => {
      state.todoList = [];
    },
  },
});

export const {
  addTodo,
  removeTodo,
  removeAllTodo,
  setSelectedTodo,
  updateTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
