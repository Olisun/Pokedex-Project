import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pokidex from './components/Pokidex';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokidex />
      </div>
    )
  }
}

export default App;
