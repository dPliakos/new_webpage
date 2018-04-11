import React from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import './../style/events.css';
import './../style/main.css';
import 'font-awesome/css/font-awesome.min.css';
import {Row, Col, Panel, Collapse, Pagination} from 'react-bootstrap';
import {Switch, Route, Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import store from './../../store.js';
import Event from "./event.js";
import PaginatedList from './paginatedList.js';
import {EVENT_LOAD_RECENT, EVENT_LOAD_OLD, EVENT_SET_NUMBER_OF_PAGES} from './../actions/eventActions.js';



class LabeledIcon extends React.Component {
  render() {
    return(
      <div className="label-with-icon">
        <FontAwesome name={this.props.icon} />
        <label> {this.props.label} </label>
      </div>
    );
  }
}

class EventDate extends React.Component {
  render() {
    const fullDate = this.props.date;
    const number = fullDate.substring(0, fullDate.indexOf("/"));
    const month  = fullDate.substring(fullDate.indexOf("/")+1, fullDate.indexOf("/", 3));
    const time = fullDate.substring(fullDate.indexOf(" ")+1, fullDate.length);
    return(
      <div className="eventDate">
	     <Row> {number} {month}</Row>
       <Row> {time} </Row>
      </div>
    );
  }
}

class EventHeader extends React.Component {

  render() {
    return(
      <Row className="eventHeader">
        <Col md={2} xs={3}> <EventDate date={this.props.date}/> </Col>
        <Col md={8} xs={7}> <div className="eventTitle">{this.props.title}</div> </Col>
        <Col md={2} xs={2} >
          <div> <FontAwesome size="3x" name={this.props.status ? "angle-double-up" :"angle-double-down"} /> </div>
        </Col>
      </Row>
    );
  }

}

class EventBody extends React.Component {

  limit(text, max=500) {
    const link = text.length > 500 ? <Link to={`/events/${this.props.title.toLowerCase()}`}> <u> Continue Reading </u> </Link> : <span> </span> ;
    return <p> {text.substring(0, 500)} {link} </p>
  }

  render() {
    return (
      <Row>
        <Row className="eventNameInfo">
          <Col md={3} xs={4} mdOffset={1} xsOffset={1}> <LabeledIcon icon="location-arrow" label={this.props.location}/> </Col>
          <Col md={3} xs={4} mdOffset={0} xsOffset={0}> <LabeledIcon icon="users" label={this.props.organizer}/> </Col>
          <Col md={3} xs={3}>
            <Link to={"/events/" + this.props.title.toLowerCase()}>
              <LabeledIcon icon="link" label="learn more" />
            </Link>
          </Col>
        </Row>
        <Row>
          <Col md={10} xs={10} mdOffset={1} xsOffset={1}>
            {this.limit(this.props.description)}
          </Col>
        </Row>
      </Row>
    );
  }
}

class EventShort extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    }
  }

  componentWillMount() {
    //const newLink = `/events/${this.props.title.toLowerCase()}`;
    //this.setState({currentLink: newLink});
  }

  changeStatus() {
  //  const newLink = !this.state.open ? "/events" : `/events/${this.props.title.toLowerCase()}`;
  //  this.setState({open: !this.state.open, currentLink: newLink});
    this.setState({open: !this.state.open});
  }

  render() {
    return(
        <Panel className={"eventPanel " + (this.state.open ? "eventPanelActive" : "eventPanelInactive")}>
          <div onClick={ ()=> {this.changeStatus()} } >
            <EventHeader date={this.props.date} title={this.props.title} status={this.state.open} />
          </div>
          <Collapse in={this.state.open}>
            {/* collapse animation does not work if target isn't a div.*/}
            <div className="eventBody">
              <EventBody location={this.props.location} description={this.props.description}
                organizer={this.props.organizer} title={this.props.title}
              />
            </div>
          </Collapse>
        </Panel>
    );
  }
}

class EventsIndex extends React.Component {

  render() {

    const recentEvents = this.props.eventsState.recentEvents.map(
        (event, i)=>{
        return <EventShort isUpcoming={true} key={i} date={event.date}
            location={event.location} title={event.title} description={event.description}
            image={event.image} organizer={event.organizer}/>
        }
      );

    const pastEvents = this.props.eventsState.pastEvents.map(
        (event, i)=>{
        return <EventShort isUpcoming={false} key={i} date={event.date}
            location={event.location} title={event.title} description={event.description}
            image={event.image} organizer={event.organizer}/>
        }
      );

    const eventsPerPage = this.props.eventsState.eventsPerPage;
    const numberOfPages = this.props.eventsState.numberOfPages;
    const needsPagination = numberOfPages > 1;
    let pagination = (<div> </div>);

    if (needsPagination) {
      pagination = (
        <Row>
          <Col md={8} mdOffset={2}>
            <PaginatedList numberOfPages={numberOfPages} active={this.props.eventsState.activeIndex}
            activateIndex={(index)=>{store.dispatch({
              type: EVENT_LOAD_OLD,
              payload: index
            })}} 
            maximumPages={1}
            />
          </Col>
        </Row>
      );
    }


    return (
    <div id='main-content'>
      <Row>
        <Col mdOffset={2} >
          <h3>Upcoming Events</h3>
        </Col>
      </Row>
      <Row>
        <Col md={8} mdOffset={2}>
          {recentEvents}
        </Col>
      </Row>
      <Row>
        <Col mdOffset={2} >
          <h3>Past Events</h3>
        </Col>
      </Row>
      <Row>
        <Col md={8} mdOffset={2}>
          {pastEvents}
        </Col>
      </Row>
      {pagination}
    </div>
    );
  }
}

export default class Events extends React.Component {

  componentWillMount() {
    store.dispatch({
      type: EVENT_SET_NUMBER_OF_PAGES
    })
    store.dispatch({
      type: EVENT_LOAD_OLD,
      payload: 0
    })
  }




  render() {

    const mapStateToProps = function(store) {
    return {
      eventsState: store.eventsState
    };
  }

    return (
      <Switch>
        <Route exact path={this.props.match.path + "/:title"} component={Event} />
        <Route exact path="/events" component={connect(mapStateToProps)(EventsIndex)} />
      <EventsIndex />
      </Switch>
    );
  }

}
