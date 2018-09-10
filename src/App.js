import React, { Component } from 'react';
import './App.css';
import Example from './componente/Imagen';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="App-container">
          <Example/>
          </div>
      </div>
    );
  }
}

export default App;
