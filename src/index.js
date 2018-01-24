import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Nav, NavItem, Grid, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './style/main.css';
import Home from './home.js';
import About from './about.js';
import Events from './events.js';
import Blog from './blog.js';
import Contact from './contact.js';
import ERROR from './not_found.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';

class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">IEEE ATEITH SB</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight className="rightPadding">
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
          </Navbar.Collapse>
      </Navbar>
    );
  }
}

class Page extends React.Component {

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
    return (
      <Router>
          <div>
            <NavigationBar onClick={(index)=>{this.onPageChange(index)}}/>
              <Grid bsStyle="container" fluid={true}>
                <Row>
                <Col md={12}>
                <Route exact path="/" component={
                  () => <Home changeBackground={this.changeBackground} />
                }/>
                <Switch>
                <Route path="/about" component={About}/>
                <Route path="/events" component={Events}/>
                <Route path="/blog" component={Blog}/>
                <Route path="/contact" component={Contact}/>
                <Route component={ERROR} />
                </Switch>
              </Col>
            </Row>
          </Grid>
        </div>
      </Router>
    );
  }
}


ReactDOM.render(<Page />, root);
