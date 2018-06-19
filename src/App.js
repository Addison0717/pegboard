import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Login from './components/Login/Login'
import Register from './components/Login/Register'
import logo from './images/pegboard.png'

import PostContainer from './components/Posts/PostContainer'
import UserContainer from './components/User/UserContainer'
import SwiperContainer from './components/Swiper/SwiperContainer'


class App extends Component {
  render() {
    return (<div className="App">
      <img src={logo} alt="PegBoardLogo" className="Logo"/>
      <Route exact path="/" component={Login}/>
      <Route exact path="/Register" component={Register}/>
      <Route exact path="/home" component={PostContainer} />
      <Route exact path="/matcher" component={SwiperContainer} />


      </div>

    );
  }
}

export default App;
