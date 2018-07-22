import React from 'react';
import {connect } from 'react-redux';
import {Navbar, NavDropdown, Nav, NavItem, MenuItem, Grid, Row, Col} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import store from "./../store.js";
import * as userActions from "./../actions/userActions.js";
import './../style/main.css';
import './../style/user.css';


class UserInfo extends React.Component {


	render() {

		const img = require("./../img/profile.jpg");

		const user = { };

		return(
			<div className="centered">
				<Row className="topSpacer">
					<Col md={12}>
						<img src={img} alt="I'm a uesr" className="userImage"/>
					</Col>
				</Row>
				<Row className="padding10 userInfo">
					<Col md={12}>
						<Row>
							<Col md={12}>
								<span> {`${user.name} ${user.lastName} aka ${user.username}`} </span>
							</Col>
						</Row>
						<Row>
							<Col md={12}>
								<span> {user.email}  </span>
							</Col>
						</Row>
						<Row>
							<Col md={12}>
								<span> Branch member  </span>
							</Col>
						</Row>
						<Row>
							<Col md={12}>
								<span> {user.location} </span>
							</Col>
						</Row>
						<Row>
							<Col md={6} mdOffset={3}>
								<span> {user.info} </span>
							</Col>
						</Row>
						<Row>
							<Col md={12}>
								<span> socialmedia </span>
							</Col>
						</Row>
					</Col>
				</Row>
			</div>
		);
	}

}


class User extends React.Component {

	render() {
		return(
			<UserInfo />
		);
	}
}

const mapStateToProps = (store) => {
  return {
  	user: store.user
  }
}

export default connect(mapStateToProps)(User);