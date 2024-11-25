import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Todos />
      <AddTodo />
    </div>
  );
}

export default App;
