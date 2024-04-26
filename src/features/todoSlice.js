import { createSlice, nanoid } from "@reduxjs/toolkit";

const storedTodos = localStorage.getItem("todos");

const initialState = {
  todos: storedTodos ? JSON.parse(storedTodos) : [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      if (action.payload.name) {
        const newTodo = {
          name: action.payload.name,
          description: action.payload.description,
          id: nanoid(),
        };
        state.todos.push(newTodo);
        localStorage.setItem("todos", JSON.stringify(state.todos));
      } else {
        alert("Name cannot be empty!");
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
