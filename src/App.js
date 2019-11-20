import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pokigame from './components/Pokigame';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokigame />
      </div>
    )
  }
}

export default App;
