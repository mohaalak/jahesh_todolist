import React from 'react';
import { ThemeContext } from '../context/theme-context';

function ChangeButtonThemeComponent(props) {
  return <button onClick={props.toggleTheme}>Toggle Theme</button>;
}

export function ChangeButtonTheme() {
  return (
    <ThemeContext.Consumer>
      {value => (
        <ChangeButtonThemeComponent
          toggleTheme={value.toggleTheme}
        ></ChangeButtonThemeComponent>
      )}
    </ThemeContext.Consumer>
  );
}
