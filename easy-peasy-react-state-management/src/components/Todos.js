import React, { useEffect } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import TodoItem from "./TodoItem";

const Todos = () => {
  const todos = useStoreState((state) => state.todos);
  const fetchTodos = useStoreActions((actions) => actions.fetchTodos);

  useEffect(() => {
    fetchTodos();

    //eslint-disable-next-line
  }, []);

  return (
    <>
      <h1>Todos</h1>
      <p>Click todo item to toggle completed</p>
      <hr />
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </>
  );
};

export default Todos;
