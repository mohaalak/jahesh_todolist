import React from 'react';

import './App.css';

import { OneForm } from './components/OneForm';
import { TodoList } from './components/TodoList';

export class TodoApp extends React.Component {
  state = {
    todos: [{ id: 0, text: 'Get Milk', done: false }]
  };

  lastId = 0;

  toggleTodo = todoId => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === todoId) {
          return { ...item, done: !item.done };
        }
        return item;
      })
    });
  };
  render() {
    return (
      <div>
        <OneForm
          placeholder="Add Todo Get Milk..."
          onSubmit={text =>
            this.setState({
              todos: [
                ...this.state.todos,
                { text, done: false, id: ++this.lastId }
              ]
            })
          }
        ></OneForm>
        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
        ></TodoList>
      </div>
    );
  }
}
