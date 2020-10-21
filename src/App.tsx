import React from 'react';
import './App.css';
import { Main } from './components/Main';
import { Navigation } from './components/Navigation';
import styled from 'styled-components';

const Divider = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
  // font-family: 'Source Code Pro', monospace;
  font-family: 'Amatic SC', cursive;
  height: 100vh;
`

function App() {
  return (
    <div className="App">
      <Divider>
        <Navigation button="Problems" />
        <Main header="Welcome to Data Structures and Algorithms in Ruby"/>
      </Divider>
    </div>
  );
}

export default App;
