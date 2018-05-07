import React from 'react';
import { connect } from 'react-redux';
import {Row, Col, Panel, Button} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './../style/home.css';
import  imgData from './../data/testData.js';
import  events from './../data/myevents.js';
import store from './../../store.js';
import {EVENT_LOAD_NEW, EVENT_REQUEST_NEW, EVENT_REQUEST_OLD, } from './../actions/eventActions.js';
// import messages from './../data/testData.js';


class SmallEvent extends React.Component {
   render() {
     const event = this.props.event;
     const desc = `${event.date} @${event.location}`;
    return(
      <Col md={6} xs={12}>
      <LinkContainer to={`/events/${event.title.toLowerCase()}`}>
      <Panel className={"smallEvent " + this.props.type} header={event.title} >
          <span> {desc} </span>
          <br/>
          <span> {event.subtitle} </span>
        <br />
      </Panel>
      </LinkContainer>
      </Col>
    );
  }
}

class SmallEventsPanel extends React.Component {

  // constructor() {
  //   super();
  //   // this.state = {
  //   //   events: events.events
  //   // }

  //   // const unsubscribe = store.subscribe(() =>
  //   //   console.log(store.getState()
  //   // ));
  //   // console.log(store.getState());
  // } 
  componentWillMount() {
     store.dispatch({
      type: EVENT_REQUEST_NEW,
      payload: true
    })
    store.dispatch({
      type: EVENT_LOAD_NEW,
      payload: 0
    })
  }


  render() {

    const newEventsHeader = this.props.eventsState.requestSuccessNew && this.props.eventsState.recentEvents.length > 0
            ? <h3> Upcoming Events </h3>
            : <div> </div>;

    let newEventsBody = this.props.eventsState.requestSuccessNew && this.props.eventsState.recentEvents.length > 0 
            ? this.props.eventsState.recentEvents.map(
                (event, i ) => {
                  return <SmallEvent event={event} key={i} type={`smallEventType_${i%3}`} />
                }
              )
            : <div> </div>;

    return (
      <div>
      <Row>
        {newEventsHeader}
      </Row>
      <Row>
          { newEventsBody }
      </Row>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
        <div className="headerWhite">
          <span> IEEE Student Branch of ATEITH </span>
          <br/>
          <p>
            Advancing technology for humanity!
          </p>
          <br/>
          <Link to="/about">
            <Button bsStyle="success" className="btnLearnMore"> Learn More </Button>
          </Link>
        </div>
    );
  }
}

class MainPanel extends React.Component {

  render() {

    const mapStateToProps = function(store) {
      return {
        eventsState: store.eventsState
      };
    }

    const Events = connect(mapStateToProps)(SmallEventsPanel);

    return(
      <div className="transparent" >
        <Col md={12} sm={12} xs={10} mdOffset={0} xsOffset={1}>
          <Header  />
          <Row className="topSpacer">
            <Events />
          </Row>
        </Col>
      </div>
    );
  }
}

export default class Home extends React.Component {

  componentDidMount() {
      this.props.changeBackground("img", imgData.imgData.background);
  }

  componentWillUnmount() {
      this.props.changeBackground("img", "None");
  }

  render() {
    return(
        <div>
          <MainPanel />
        </div>
      );
  }
}
