import React, { useState } from "react";
import "./App.css";

function TodoItem({ item, toggleComplete, deleteItem, editItem }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(item.text);

  const handleEdit = () => {
    if (!editValue.trim()) return;
    editItem(item.id, editValue);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <li>
        <input
          type="text"
          value={editValue}
          onChange={(event) => setEditValue(event.target.value)}
        />
        <button onClick={handleEdit}>Lưu</button>
        <button onClick={() => setIsEditing(false)}>Hủy</button>
      </li>
    );
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => toggleComplete(item.id)}
      />
      <span
        style={{ textDecoration: item.completed ? "line-through" : "none" }}
      >
        {item.text}
      </span>
      <button onClick={() => setIsEditing(true)}>Sửa</button>
      <button onClick={() => deleteItem(item.id)}>Xóa</button>
    </li>
  );
}

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return;
    setTodos([
      ...todos,
      { id: Date.now(), text: inputValue, completed: false },
    ]);
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

export default App;
