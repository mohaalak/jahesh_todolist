import React from "react";
import "./TodoItem.css";

export const TodoItem = ({toggleTodo, todo: {id, text, done}}) => {
  return <li className={done ? 'done' : ''} onClick={() => toggleTodo(id)} >{text}</li>
}