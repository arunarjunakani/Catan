import React, { Component } from 'react';
import './App.css';
import Canvas from './Canvas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Click on a tile below to get started</p>
        <Canvas></Canvas>
      </div>
    );
  }
}

export default App;
