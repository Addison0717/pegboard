import * as React from 'react'
import {connect} from 'react-redux'
// import './Notifications.css'
import Notifications from './Notifications'
import {makeRequest, makeMatch} from '../../actions/index'

const r = {
  requesterId:2,
  posterId: 1,
  postBody: {
    postId:1,
    description: 'looking for somebody',
    category: 'cooking'
  }
}

class NotificationsContainer extends React.PureComponent {


  componentDidMount(){
    this.props.makeRequest(r)
  }


  render() {

    return <div>
    Hi
      // <ul>
      //   this.props.users[0].notification.request.map(reqItem => <li> {users[reqItem.requesterId].name}</li>)
      // </ul>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.Users
  }
}

export default connect(mapStateToProps, {makeRequest, makeMatch})(NotificationsContainer)
