import React, { Component } from 'react';
import './App.css';
import InfoForm from './InfoForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <p>
            Home Rental Form
          </p>
        </header>
        <InfoForm />
      </div>
    );
  }
}

export default App;
