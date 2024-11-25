import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
    >
      <span style={{ cursor: "pointer" }}>{todo.title}</span>
      <button>
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
};

export default TodoItem;
