import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Main } from './components/Main';
import { Navigation } from './components/Navigation';
import { Header } from './components/Header';

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
        <div>
          <Header header="Welcome to Data Structures and Algorithms in Ruby" />
          <Main />
        </div>
      </Divider>
    </div>
  );
}

export default App;
