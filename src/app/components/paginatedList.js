import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './../style/events.css';
import './../style/main.css';
import './../style/pagination.css';
import 'font-awesome/css/font-awesome.min.css';
import {Row, Col, Panel, Collapse} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
// import Event from "./event.js";
//import {Switch, Route, Link } from 'react-router-dom';
//import store from './../../store.js';

class PaginationTab extends React.Component {

	getIndex() {
		return this.props.number;
	}

	render() {
		return (
			<div 
				className={"paginationTab " + (this.props.active ? "paginationTabActive" : "") }
				onClick={this.props.triger}
			> {this.props.number} </div>
		)
	}
}


export default class PaginatedList extends React.Component {
	/*
	needs an onclick function
	*/

	render() {

		const nop = this.props.numberOfPages;
		const maximumPages = (this.props.maximumPages ? this.props.maximumPages : this.props.numberOfPages); 
		const minimumPages = (this.props.minimumPages ? this.props.minimumPages : nop);
		const hideTabs = nop > this.props.maximumPages+2 && nop > 5;

		let tabs = [];
		let start = 0; 
		let end = nop;
		if (hideTabs && minimumPages < nop + 2) {
			start = (this.props.active === 0 ? 0 : this.props.active - 1) ;
			end = (this.props.active === nop - 1 ? nop - 1 : this.props.active + 1);
			//while(end < nop-1) {end++;}
		}

		for (let i=start; i<=end; i++) {
			tabs.push(<PaginationTab number={i+1} key={i} active={i===this.props.active} triger={()=>{this.props.activateIndex(i)}} />);
		}


		const firstPart  = (hideTabs && this.props.active > 1
			? <PaginationTab  number={1} key={0} active={0 === this.props.active} triger={()=>{this.props.activateIndex(0)}} />
			: "");
		const hide1 = (hideTabs && this.props.active > 2 ? " ... " : "" );
		
		const secondPart = tabs;

		const hide2 = (hideTabs && (this.props.active < nop - 2) ? " ... " : "" );
		
		const thirdPart  = (hideTabs && this.props.active < nop - 2
			? <PaginationTab  number={nop} key={nop-1} active={nop - 1 === this.props.active} triger={()=>{this.props.activateIndex(nop-1)}} />
			: "");										

		return(
			<Row>
				<Col md={3} mdOffset={8}>
						{firstPart}
						{hide1}
						{secondPart}
						{hide2}
						{thirdPart}
				</Col>
			</Row>
		);
	}
}