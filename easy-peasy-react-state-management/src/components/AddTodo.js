import React, { useState } from "react";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  return (
    <div>
      <form>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add todo title..."
        />
        <input type="submit" value="Add Todo" />
      </form>
    </div>
  );
};

export default AddTodo;
