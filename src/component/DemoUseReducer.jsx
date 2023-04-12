import React, { useReducer, useState } from "react";

const initState = 0;
const UP_ACTION = "up";
const DOWN_ACTION = "down";
const RANDOM_ACTION = "random";
const reducer = (state, action) => {
  switch (action.type) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    case RANDOM_ACTION:
      return state + Math.floor(Math.random() * 10);
    default:
      throw new Error("khong co action tuong ung");
  }
};

export default function DemoUseReducer() {
  const [count, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          dispatch({ type: UP_ACTION });
        }}
      >
        Up
      </button>
      <button
        onClick={() => {
          dispatch({ type: DOWN_ACTION });
        }}
      >
        Down
      </button>
      <button
        onClick={() => {
          dispatch({ type: RANDOM_ACTION });
        }}
      >
        +Random
      </button>
    </div>
  );
}
