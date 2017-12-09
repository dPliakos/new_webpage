import React from 'react';
import {Row, Col, Panel, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './style/home.css';
import  imgData from './data/testData.js';
import  events from './data/testData.js';
import messages from './data/testData.js';


class SmallEvent  extends React.Component {
   render() {
    return(
      <Col md={6} xs={12}>
      <Panel className={"smallEvent " + this.props.type} header={this.props.name} >
        <span> {this.props.description} </span>
        <br />
      </Panel>
      </Col>
    );
  }
}

class SmallEventsPanel extends React.Component {

  constructor() {
    super();
    this.state = {
      events: events.events
    }
  }

  render() {
    const newEventsExist = this.state.events.length > 0;
    const success = messages.messages.newEvents;
    const fail = messages.messages.noNewEvents;
    return (
      <div>
      <Row>
        <h3> Upcoming events: </h3>
      </Row>
      <Row>
          { this.state.events.map(
            (event, i ) => {
              return <SmallEvent name={event.name} description={event.description} key={i} type={`smallEventType_${i%3}`} />
            }
          )}
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
    return(
      <div className="transparent" >
        <Col md={12} sm={12} xs={10} mdOffset={0} xsOffset={1}>
          <Header  />
          <Row className="topSpacer">
            <SmallEventsPanel />
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
        <MainPanel />
      );
  }
}
