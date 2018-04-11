import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Nav, NavItem, Grid, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './app/style/main.css';
import Home from './app/components/home.js';
import About from './app/components/about.js';
import Events from './app/components/events.js';
import Blog from './app/components/blog.js';
import Contact from './app/components/contact.js';
import ERROR from './not_found.js';
import Footer from './app/components/footer.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import {Provider} from "react-redux";
import store from "./store.js";
import {EVENT_LOAD_RECENT} from './app/actions/eventActions.js';



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

  constructor() {
    super();
    this.state =  {
      error: false
    }
  }


  componentWillMount() {
    let newEvents;

    fetch('http://localhost:3001/events').then((response)=>{
      return response.json();
    }, (err)=>{
      this.setState({error: true});
    }).then((response)=>{
      newEvents = response;
    }, (err)=>{
      console.error(err);
    }).then((response=>{
      store.dispatch({
        type: EVENT_LOAD_RECENT,
        payload: newEvents
      })
    }))
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
    return (
      <Provider store={store}>
      <Router className="fullScreen">
          <div>
            <NavigationBar onClick={(index)=>{this.onPageChange(index)}}/>
              <Grid>
                <Row>
                <Col>
                <Switch>
                  <Route exact path="/" component={
                    () => <Home changeBackground={this.changeBackground} />
                  }/>
                  <Route path="/about" component={
                    () => <About changeBackground={this.changeBackground} />
                  }/>
                  <Route path="/events" err={this.state.error} component={Events}/>
                  <Route path="/blog" component={Blog}/>
                  <Route path="/contact" component={Contact}/>
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
