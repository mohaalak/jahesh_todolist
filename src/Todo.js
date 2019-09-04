import React from 'react';

import './App.css';

import { OneForm } from './components/OneForm';
import { TodoList } from './components/TodoList';
import { Footer } from './components/Footer';

export class TodoApp extends React.Component{
  
  state = {
    todos: [],  // {id: 0, text:'Get Milk', done: false}
    visibilityFilter: 'all'
  }

  lastId=0;

  toggleTodo = (todoId) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if(item.id === todoId) {
          return {...item, done: !item.done}
        }
        return item;
      })
    })
  }

  changeFilter = (visible) => {
    this.setState({ visibilityFilter: visible });
  }

  filterList = ()  =>{
    switch (this.state.visibilityFilter) {
      case 'all':
        return this.state.todos;
      case 'todo':
        return this.state.todos.filter(x => !x.done);
      case 'completed':
        return this.state.todos.filter(x => x.done);
    }
  }

  render() {
    return (
      <div >
        <OneForm placeholder="Add Todo Get Milk..." onSubmit={(text) => this.setState({todos: [...this.state.todos, {text, done:false, id: ++this.lastId}]})}></OneForm>
        <TodoList todos={this.filterList()} toggleTodo={this.toggleTodo}></TodoList>
        <Footer
          active={this.state.visibilityFilter}
          changeFilter={this.changeFilter}
        ></Footer>
      </div>
    );
  }
  
}