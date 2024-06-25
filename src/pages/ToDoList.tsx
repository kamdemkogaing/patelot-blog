import { useState } from "react";

const ToDoList = () => {
  //state
  const [todos, setTodos] = useState<string[]>([]);
  const [todo, setTodo] = useState("Add to list...");

  //comportement
  const addTodo = () => {
    // copie du state
    const newToDoList = [...todos];

    if (todo !== "") {
      setTodos([...newToDoList, todo]);
      setTodo("Add to list...");
    }
  };

  //render
  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo List Patrick Kamdem</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add To List</button>
      <ul>
        {todos.map((item: string, index: number) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
