"use client";
import React from "react";
import { useState, useEffect } from "react";

export default function Todo() {
  const [todo, setTodo] = useState({});
  useEffect(async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const result = await response.json();
    console.log(response);
    setTodo(result);
  }, []);
  return (
    <div>
      <h1>{todo.title}</h1>
    </div>
  );
}
