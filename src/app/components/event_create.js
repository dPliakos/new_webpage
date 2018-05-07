import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './../style/events.css';
import './../style/main.css';
import 'font-awesome/css/font-awesome.min.css';
import {Row, Col, Panel, Collapse, Button, FormControl} from 'react-bootstrap';
import {Switch, Route, Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import Calendar from 'react-calendar';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import { Redirect} from 'react-router-dom';



class FormUnit extends React.Component {

	getState = this.props.onChange == null
		? () => {return;}
		: (evt) => {this.props.onChange(evt.target.value)};

  render() {
    return(
      <div className="topSpacer">
      	<label> {this.props.name} </label>
        <input type={this.props.type} id={this.props.id} placeholder={this.props.name}
        onChange={this.getState}/>
      </div>
    );
  }
}

class TimeInput extends React.Component {

	getState = this.props.onChange == null
		? () => {return;}
		: (evt) => {this.props.onChange(evt.target.value)};

	render() {
		let times = [];
		for(let i=0; i<24; i++) {
			times.push(("0" + i).slice(-2) + ":00");
			times.push(("0" + i).slice(-2) + ":30");
		}
		return (
			<FormControl componentClass="select" placeholder="select" onChange={this.getState} className="timeSelect dark">
        {times.map((time, i)=>{ return <option key={i} value={time}> {time}  </option>}) }
      </FormControl>
		);
	}
}

class Form extends React.Component {
	constructor() {
		super();
		this.state = {
			title: "",
			subtitle: "",
			location: "",
			organizer: "",
			description: "",
			startdate: new Date(),
			enddate  : new Date(),
			startTime: "",
			endTime: "",
			// titleValid: false,
			// locationValid: false,
			// descriptionValid: false,
			// startdateValid: false,
			// enddateValid: false,
			// startTimeValid: false,
			// endTimeValid: false,
			completed: false
		}
	}

	getTitle		 = (title) => this.setState({title: title});
	getSubtitle  = (subtitle) => this.setState({subtitle: subtitle});
	getLocation  = (location) => this.setState({location: location});
	getOrganizer = (organizer) =>this.setState({organizer: organizer});
	getDescription=(description) => this.setState({description: description});
	getStartDate = (date) => this.setState({startdate: date});
	getEndDate   = (date) => this.setState({enddate: date});
	getStartTime = (time) => this.setState({startTime: time});
	getEndTime   = (time) => this.setState({endTime: time});
	submitEvent  = () => {
		// this.validate();
		// if (!this.state.completed) {
		// 	console.log("not validated");
		// 	return;
		// }
		var myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json');
		const body = JSON.stringify(this.state);
		var myInit = { method: 'POST',
		               headers: myHeaders,
		               body: body,
		               mode: 'cors',
		               cache: 'default' };
		console.log(myInit);
		fetch("http://localhost:3001/events", myInit)
			.then(res => res.blob())
			.then((res) => {this.setState({complete: true})})
			.catch((err) => {this.setState({complete: false})});
	}

	// validate() {
	// 	const snapshot = this.state;
	// 	const now = new Date();
	// 	this.setState({titleValid: snapshot.title !== ""});
	// 	this.setState({locationValid: snapshot.location !== ""});
	// 	this.setState({descriptionValid: snapshot.description !== ""});
	// 	this.setState({startdateValid: snapshot.startdate !== null});
	// 	this.setState({enddateValid: snapshot.enddate !== null});
	// 	this.setState({startTimeValid: snapshot.start !== null});
	// 	this.setState({endTimeValid: snapshot.endTime !== null});
	// 	const validated = snapshot.locationValid && snapshot.descriptionValid && snapshot.titleValid && 
	// 									snapshot.startdateValid && snapshot.enddateValid && snapshot.startTimeValid &&
	// 									snapshot.endTimeValid;
	// 	this.setState({complete: validated});
	// }


  render() {

  	const complete = this.state.complete ? <Redirect push to={"/events"} /> : <div> </div>;

    return(
      <div className="contactForm">
      	<br/>
      	<Row>
      		<Col md={4} mdOffset={1}>
      			<Row>
      				<Col>
		        	<FormUnit name="Title" type="text" id="title" onChange={this.getTitle} />
		        	</Col>
		        </Row>
		        <Row>
      				<Col>
		        <FormUnit name="Subtitle" type="text" id="subtitle" onChange={this.getSubtitle}/>
		        </Col>
		        </Row>
		        <Row>
      				<Col>
		        <FormUnit name="Location" type="text" id="Location" onChange={this.getLocation}/>
		        </Col>
		        </Row>
		        <Row>
      				<Col>
		        <FormUnit name="Organizer" type="text" id="organizer" onChange={this.getOrganizer}/>
		        </Col>
		        </Row>
		        <Row>
		        	<Col md={5}>
			        	<span> Staring at </span>
			        	<TimeInput onChange={this.getStartTime}/>
		        	</Col>
		        	<Col md={5}>
		        		<span> Until </span>
		        		<TimeInput onChange={this.getEndTime} />
		        	</Col>	        
		        </Row>
	       	</Col>
	       	<Col md={3}>
	       		<span> Start Date</span>
	        	<Calendar onChange={this.getStartDate} value={this.state.startdate} className="light"	/>
	        </Col>
	        <Col md={3}>
	       		<span> End Date</span>
	        	<Calendar onChange={this.getEndDate} value={this.state.enddate} className="light"	/>
	        </Col>
	      </Row>
	      <Row>
	      	<Col md={10} mdOffset={1}>
		        {/*<textarea id="description" placeholder="Description" className="topSpacer"
		         onChange={this.getDescription}></textarea> */}
		        <ReactQuill className="light highEditor topSpacer" onChange={this.getDescription} />
	        </Col>
     		</Row>
     		<Row>
     			<Col md={10} mdOffset={1}>
     				<br/><br/><br/><br/>
		        	<Button className="topSpacer" type="submit" onClick={this.submitEvent}> Create Event </Button>
		        	{complete}
	        </Col>
	       </Row>
     </div>
    );
  }
}

export class NewEvent extends React.Component {

	render() {
		return (
			<Form />
			);
	}

}