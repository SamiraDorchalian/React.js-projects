import { action, thunk } from "easy-peasy";
import { v4 as uuidv4 } from "uuid";

export default {
  //state
  todos: [],
  //Thunk
  fetchTodos: thunk(async (actions) => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    const todos = await res.json();

    actions.setTodos(todos);
  }),
  //Action
  setTodos: action((state, todos) => {
    state.todos = todos;
  }),
  add: action((state, todo) => {
    todo.id = uuidv4();
    state.todos = [...state.todos, todo];
  }),
  toggle: action((state, id) => {
    state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  }),
  remove: action((state, id) => {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  }),
};
