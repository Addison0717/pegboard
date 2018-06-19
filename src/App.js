import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Login from './components/Login/Login'
import Register from './components/Login/Register'

class App extends Component {
  render() {
    return (<div className="App">

      <Route exact="exact" path="/" component={Login}/>
      <Route path="/Register" component={Register}/>

    </div>);
  }
}

export default App;
