import React from 'react';

import './App.css';
import { TodoApp } from './Todo';

import { Posts } from './Posts';
import { Comments } from './Comments';
import { ThemeContext } from './context/theme-context';
import { ChangeButtonTheme } from './components/ChangeButtonTheme';

class App extends React.Component {
  state = {
    theme: 'light'
  };

  toggleTheme = () => {
    this.setState({ theme: this.state.theme === 'light' ? 'dark' : 'light' });
  };
  render() {
    return (
      <div>
        <ThemeContext.Provider
          value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}
        >
          <ChangeButtonTheme></ChangeButtonTheme>
          <TodoApp></TodoApp>
        </ThemeContext.Provider>
      </div>
      // <div >
      //   <TodoApp></TodoApp>
      // </div>
      // <MouseTracker></MouseTracker>
      // <Comments></Comments>
    );
  }
}

export default App;
