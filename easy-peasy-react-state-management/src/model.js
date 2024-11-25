import { action } from "easy-peasy";
import { v4 as uuidv4 } from "uuid";

export default {
  //state
  todos: [
    { id: 1, title: "Take out trash", completed: true },
    { id: 2, title: "Pickup kids from school", completed: false },
    { id: 3, title: "Dinner with boss", completed: false },
  ],

  //Action
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
