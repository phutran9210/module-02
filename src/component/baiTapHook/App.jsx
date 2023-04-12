import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { v4 } from "uuid";
export default function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const addItem = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return;
    setTodos([...todos, { id: v4(), text: inputValue, completed: false }]);
    setInputValue("");
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteItem = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const editItem = (id, newText) => {
    setTodos(
      todos.map((item) => (item.id === id ? { ...item, text: newText } : item))
    );
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={addItem}>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">Thêm</button>
      </form>
      <ul>
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            toggleComplete={toggleComplete}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        ))}
      </ul>
    </div>
  );
}
