import React, { useState } from "react";

export default function TodoItem({
  item,
  toggleComplete,
  deleteItem,
  editItem,
}) {
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
