import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {Navbar, NavDropdown, Nav, NavItem, MenuItem, Grid, Row, Col} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import Home from './components/home.js';
import About from './components/about.js';
import Events from './components/events.js';
import Blog from './components/blog.js';
import Contact from './components/contact.js';
import User from './components/userProfile.js';
import ERROR from './not_found.js';
import Footer from './components/footer.js';
import {Provider} from "react-redux";
import UserMenu from "./components/UserMenu.js";
import store from "./store.js";
import {EVENT_LOAD_NEW} from './actions/eventActions.js';
import * as userActions from './actions/userActions.js';
import 'bootstrap/dist/css/bootstrap.css';
import './style/main.css';


class NavigationBar extends React.Component {

  render() {

    return (
      <Navbar className ="navigationBar" inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">IEEE ATEITH SB</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer exact to="/">
                <NavItem > Home  </NavItem>
              </LinkContainer>
              <LinkContainer to="/about">
                <NavItem > About   </NavItem>
              </LinkContainer>
              <LinkContainer to="/events">
                <NavItem > Events  </NavItem>
              </LinkContainer>
              <LinkContainer to="/blog">
                <NavItem > Blog    </NavItem>
              </LinkContainer>
              <LinkContainer to="/contact">
                <NavItem > Contact </NavItem>
              </LinkContainer>
            </Nav>
              <UserMenu />
          </Navbar.Collapse>
      </Navbar>
    );
  }
}

class Page extends React.Component {

  constructor() {
    super();
    this.state =  {
      error: false
    }
  }


  componentWillMount() {
    let newEvents;
    // store.dispatch({
    //   type: userActions.LOGIN,
    //   payload: {}
    // })
  }

  changeBackground(type, source) {
    if (type === 'image' || type === 'img')
      document.body.style.backgroundImage = 'url(' + source + ')';
    else {
      if (type === 'color' || type === 'colour')
        document.body.style.backgroundColor = source ? source : 'white';
      else
        document.body.style.backgroundColor = 'white';
      document.body.style.backgroundImage = 'None';
    }
  }

  render() {

    const mapStateToProps = function (store) {
      return {
        user: store.user
      };
    }

    return (
      <Provider store={store}>
      <Router className="fullScreen">
          <div>
            <NavigationBar onClick={(index)=>{this.onPageChange(index)}} />
              <Grid>
                <Row>
                <Col>
                <Switch>
                  <Route exact path="/" component={
                    connect(mapStateToProps)(
                      () => <Home changeBackground={this.changeBackground} />
                    )
                  }/>
                  <Route path="/about" component={
                    () => <About changeBackground={this.changeBackground} />
                  }/>
                  <Route path="/events" err={this.state.error} component={
                    connect(mapStateToProps)(Events)
                  }/>
                  <Route path="/blog" component={
                    connect(mapStateToProps)(Blog)
                  }/>
                  <Route path="/contact" component={
                    connect(mapStateToProps)(Contact)
                  }/> 
                  <Route path="/users/:username" component={User} />
                  <Route component={ERROR} />
                </Switch>
              </Col>
            </Row>
          </Grid>
          <Footer />
        </div>
      </Router>
      </Provider>
    );
  }
}


ReactDOM.render(<Page />, root);
