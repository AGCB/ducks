import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import CreateCharacter from './components/CreateCharacter/'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <CreateCharacter />
      </header>
    </div>
  );
}

export default App;
