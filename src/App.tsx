import React from 'react';
import './App.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Main } from './components/Main';
import { Navigation } from './components/Navigation';
// import { Header } from './components/Header';
import { Interviews } from './components/Interviews';
import { Algorithms } from './components/Algorithms';
import { DataStructures } from './components/Data Structures';
import { Ruby } from './components/Ruby';
import { Contact } from './components/Contact';
import { Arrays } from './components/Data Structures/Arrays';

const Divider = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
  font-family: 'Roboto Mono', monospace;
  height: 100vh;
`

function App() {
  return (
    <div className="App">
      <Router>
        <Divider>
          <Navigation button="Problems" />
          <div>
            {/* <Header header="Welcome to Data Structures and Algorithms in Ruby" /> */}
            <Route path="/" default={true} exact={true} render={Main} />
            <Route path="/datastructures" default={false} exact={true} render={DataStructures} />
            <Route path="/algorithms" default={false} exact={true} render={Algorithms} />
            <Route path="/interviews" default={false} exact={true} render={Interviews} />
            <Route path="/whyruby" default={false} exact={true} render={Ruby} />
            <Route path="/contact" default={false} exact={true} render={Contact} />
            <Route path="/datastructures/arrays" default={false} exact={true} render={Arrays} />
          </div>
        </Divider>
      </Router>
    </div>
  );
}

export default App;
