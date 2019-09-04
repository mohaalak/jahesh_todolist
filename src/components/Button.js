import React from 'react';
import './Button.css';
import { ThemeContext } from '../context/theme-context';

const ButtonComponent = props => (
  <button className={['my-button', props.theme].join(' ')} {...props}>
    {props.children}
  </button>
);

export const Button = props => (
  <ThemeContext.Consumer>
    {value => (
      <ButtonComponent {...props} theme={value.theme}></ButtonComponent>
    )}
  </ThemeContext.Consumer>
);
