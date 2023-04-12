import { useEffect, useState } from "react";
import React from "react";

export default function DemoUseEffect() {
  const [user, setuser] = useState(0);
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const [arr, arrList] = useState([1, 2, 3, 4, 5]);
  const handleAddRandom = () => {
    arrList([...arr, Math.floor(Math.random() * 10)]);

    console.log(arr);
  };

  useEffect(() => {
    console.log("useEffect render lại");
  }, [text, count]);
  return (
    <div>
      {console.log("state thay đổi")}
      Demo
      <input type="text" onChange={(e) => setuser(e.target.value)} />
      <div> Đây là Text : {text}</div>
      <div>Đây là count : {count}</div>
      <div>{arr}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Up
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Down
      </button>
      <button
        onClick={() => {
          setText("Xin chào");
        }}
      >
        Change
      </button>
      <div>
        <h2>Object</h2>
        <div>{arr.toString()}</div>
      </div>
      <button onClick={handleAddRandom}>Add Random Button</button>
    </div>
  );
}
