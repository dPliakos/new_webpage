import React from 'react';
import {connect } from 'react-redux';
import {Navbar, NavDropdown, Nav, NavItem, MenuItem, Grid, Row, Col} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import store from "./../store.js";
import * as userActions from "./../actions/userActions.js";
import './../style/main.css';
import './../style/user.css';

class UserMenu extends React.Component {

	login() {
    store.dispatch({
      type: userActions.LOGIN,
      payload: {}
    });
  }

  logout() {
  	store.dispatch({
  		type: userActions.LOGOUT
  	})
  }

  componentWillMount() {

  }


  render() {
    const loggedIn = (
      <Nav pullRight>
        <NavDropdown pullRight eventKey={3} title="User" id="basic-nav-dropdown">
          <LinkContainer to={`/users/${this.props.user.username}`}>
            <MenuItem eventKey={3.1} >My profile</MenuItem>
          </LinkContainer>

          <MenuItem eventKey={3.2}>Profile settings</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4} onClick={this.logout}>Logout</MenuItem>
        </NavDropdown> 
      </Nav>
      );

    const notLoggedIn = (
       <Nav pullRight>
        <NavItem eventKey={1} href="#" onClick={this.login}>
          Login
        </NavItem>
        <NavItem eventKey={2} href="#">
          Register
        </NavItem>
      </Nav>
    );
    console.log(this.props.user);
    if (this.props.user.loggedIn) return loggedIn;
    else return notLoggedIn;

  }
}

const mapStateToProps = (store) => {
  return {
    user: store.user
  }
}

export default connect(mapStateToProps)(UserMenu);