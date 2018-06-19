import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Login from './components/Login/Login'
import Register from './components/Login/Register'
import logo from './images/pegboard.png'

class App extends Component {
  render() {
    return (<div className="App">
      <img src={logo} alt="PegBoardLogo" className="Logo"/>
      <Route exact="exact" path="/" component={Login}/>
      <Route path="/Register" component={Register}/>

    </div>);
  }
}

export default App;
