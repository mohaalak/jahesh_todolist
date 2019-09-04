import React from 'react';

import './App.css';
import { TodoApp } from './Todo';
import { MouseTracker } from './components/MouseTracker';
import { Posts } from './Posts';
import { Comments } from './Comments';

class App extends React.Component {
  render() {
    return (
      // <div >
      //   <TodoApp></TodoApp>
      // </div>
      // <MouseTracker></MouseTracker>
      // <Comments></Comments>
      <Posts></Posts>
    );
  }
}

export default App;
