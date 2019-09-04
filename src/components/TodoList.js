import React from 'react';
import { TodoItem } from './TodoItem';
import { ChangeButtonTheme } from './ChangeButtonTheme';

export const TodoList = props => (
  <ul>
    {props.todos.map(item => (
      <TodoItem key={item.id} todo={item} toggleTodo={props.toggleTodo} />
    ))}

    <ChangeButtonTheme></ChangeButtonTheme>
  </ul>
);
