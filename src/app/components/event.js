import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './../style/events.css';
import './../style/main.css';
import events from "../data/myevents.js";
import {Row, Col} from 'react-bootstrap';
/*
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
*/

export default class Event extends React.Component {

  constructor() {
    super();
    this.state={
      //match: {}
    }
  }

  getInitialState() {
    const newMatch = this.findEvent(this.props.match.params.title);
    return {match: newMatch};
  }

  findEvent(title) {
    const allEvents = events.events;
    for (var i in allEvents) {
      if (allEvents[i].title.toLowerCase() === title) {
        return allEvents[i];
      }
    }
  }

  render() {
    const match = this.findEvent(this.props.match.params.title);
    return(
      <Row>
        <Col md={8} mdOffset={2}>
          <Row>
            <Col md={8} mdOffset={0} xsOffset={2}>
              <h1> {match.title} </h1>
            </Col>
          </Row>
          <Row>
            <Col md={8} mdOffset={0} xsOffset={2}>
              <h3> {match.subtitle} </h3>
            </Col>
          </Row>
          <Row>
            <Col md={8} xs={6} mdOffset={2} xsOffset={3}>
              <img
                src="https://blog.zingchart.com/content/images/2016/06/react-1.png"
                alt="not in use"
                className="eventImage"
              />
            </Col>
          </Row>
          <Row>
            <Col md={12} xs={10} mdOffset={0} xsOffset={1} className="eventDescription">
              {match.description}
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }

}
