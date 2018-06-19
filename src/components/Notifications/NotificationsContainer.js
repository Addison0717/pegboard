import * as React from 'react'
import {connect} from 'react-redux'
// import './Notifications.css'
import Notifications from './Notifications'
import {makeRequest, makeMatch} from '../../actions/index'


class NotificationsContainer extends React.PureComponent {


  componentDidMount(){

  }


  render() {

    return
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.Users
  }
}

export default connect(mapStateToProps, {makeRequest, makeMatch})(NotificationsContainer)
