import React from 'react';

import './App.css';

import { OneForm } from './components/OneForm';

function App() {
  return (
    <div >
      <OneForm placeholder="Add Todo Get Milk..." onSubmit={(text) => alert('your name is ' + text)}></OneForm>
      
    </div>
  );
}

export default App;
