import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import PostContainer from './components/Posts/PostContainer'
import UserContainer from './components/User/UserContainer'


class App extends Component {
  render() {
    return (
      <div className="App">

        {/* <Route exact path="/" component={LoginContainer} /> */}
        <Route exact path="/home" component={PostContainer} />


      </div>
    );
  }
}

export default App;
