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
<<<<<<< HEAD
    return (<div className="App">
      <img src={logo} alt="PegBoardLogo" className="Logo"/>
=======
    return (

      <div className="App">

>>>>>>> 30f3af07237475c3648d23f0b420a77e96ea4959
      <Route exact="exact" path="/" component={Login}/>
      <Route path="/Register" component={Register}/>
      <Route exact path="/home" component={PostContainer} />
      <Route exact path="/matcher" component={SwiperContainer} />


      </div>

    );
  }
}

export default App;
