import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import LandingContainer from './components/Login/LandingContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LandingContainer} />


      </div>
    );
  }
}

export default App;
