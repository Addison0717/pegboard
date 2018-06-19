import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Swiper extends Component{
	render() {
		return (
			<div className="user">
				<div>
					<img src={this.props.user.picture} />
				</div>
				<Link to={"detail/" + this.props.user.id}><img src={this.props.user.picture} /></Link>
				<div>
					<span className="name">{this.props.user.name}</span>
					<span className="birthday">{this.props.user.birthday}</span>
					<span className="city">{this.props.user.city}</span>
          <span className="bio">{this.props.user.bio}</span>
				</div>
			</div>
		)
	}
}

export default Swiper;
