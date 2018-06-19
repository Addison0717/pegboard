import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logUser } from '../../actions/logUser'

import users from '../../reducers/users'

class Swiper extends Component{

	componentDidMount() {

		console.log(this.props.user.posts.carpenter.employer[0].posterId)
		console.log(this.props.user.users[3].userId)

		console.log(this.props.user.posts)
		console.log(this.props.user.users)

		if (this.props.user.posts.carpenter.employer.map((x) => { x.posterId }) === this.props.user.users.userId)  {
			console.log('fuck yeah')
		}


	}


	render() {
		return (
			<div className="user">
				<div>

				</div>
			</div>
		)
	}
}

export default Swiper;
