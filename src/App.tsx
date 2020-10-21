import React from 'react';
import './App.css';
import { Main } from './components/Main';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation button="Problems" />
      <Main header="Welcome to"/>
    </div>
  );
}

export default App;
