import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Row, Col, Button} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import './../style/contact.css';

import contactInfo from './../data/testData.js';
import socialMedia from './../data/testData.js';


class ContactInfo extends React.Component {
  render() {
    return(
      <div>
        <span>
          <FontAwesome name={this.props.icon} className="somePadding"/>
        </span>
        <label> {this.props.label} </label>
      </div>
    )
  }
}

class SocialPanel extends React.Component {
  render() {
    return(
      <div className="socialHolder">
        {this.props.social.map((socialTag, i) => {
          return (<a href={socialTag.link} target="_blank" key={i} >
                    <FontAwesome
                    name={socialTag.fontawesome}
                    size="2x"
                    className="somePadding socialTag"/>
                  </a>
                )
        })}
      </div>
    )
  }
}

class ContactPanel extends React.Component {
  render() {
    return(
      <div>
        <Row>
          <Col>
            <ul className="bulletlessList">
              {this.props.contactInfo.map((contactInfo, i) => {
                return <li key={i} className="contactList">
                          <ContactInfo icon={contactInfo.fontawesome} label={contactInfo.label}/>
                       </li>
              })}
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <SocialPanel social={this.props.socialMedia} />
          </Col>
        </Row>
      </div>
    )
  }
}

class FormUnit extends React.Component {

  getState = this.props.onChange == null
    ? () => {return;}
    : (evt) => {this.props.onChange(evt.target.value)};

  render() {
    return(
      <div className="topSpacer">
        <input type={this.props.type} id={this.props.id} placeholder={this.props.name} onChange={this.getState}/>
      </div>
    );
  }
}

class Form extends React.Component {

  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      messageSent: false,
      complete: false,
      error: false
    }
  }

  getName = (name) => {this.setState({name: name})};
  getEmail = (mail) =>{this.setState({email: mail})};
  getSubject = (sub) =>{this.setState({subject: sub})};
  getMessage = (message) => {this.setState({message: message})};
  sendMessage = () => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const body = JSON.stringify(this.state);
    var myInit = { method: 'POST',
                   headers: myHeaders,
                   body: body,
                   mode: 'cors',
                   cache: 'default' };
    console.log(myInit);
    fetch("http://localhost:3001/messages", myInit)
      .then((res) => {this.setState({
                              /*complete: (JSON.parse(res.blob()).code === 0)*/
                              complete: true
                            })})
      .then((res) => {this.setState({messageSent: true, error: false}); console.log("message: ok")})
      .catch((err) => {this.setState({messageSent: false, error: true}); console.log(err)})
  }

  // clean() {
  //   this.setState({
  //     name: "",
  //     email: "",
  //     subject: "",
  //     message: "",
  //     messageSent: false,
  //     complete: false,
  //     error: false
  //   });

  //   // clean form 
  //   console.log("hello!");
  // }




  render() {

    const success = this.state.complete === true ? "Message sent!" : "";
    const error   = this.state.error    === true ? "Message could not be sent": "";

    const message = <div> {success} </div>;
    const form = (
            <div className="contactForm">
              <FormUnit name="Name" type="text" id="userName" onChange={this.getName} />
              <FormUnit name="Email" type="text" id="userEmail" onChange={this.getEmail}/>
              <FormUnit name="Subject" type="text" id="userSubject" onChange={this.getSubject} />
              {/*<label> Message </label> <br/>*/}
              <textarea id="userMessage" placeholder="Message" className="topSpacer" onChange={this.getMessage}></textarea>
              <Button type="button" onClick={this.sendMessage}> Send Message </Button>
            </div>
    );

    const body = this.state.complete ? message : form;

    return(
      <div> {body} </div>
    );
  }
}

export default class Contact extends React.Component {

  constructor() {
    super();
    this.state = {
      contactInfo: contactInfo.contactInfo,
      socialMedia: socialMedia.socialMedia

    }
  }

  render() {
    return(
      <Row className="topSpacer">
        <Col md={4} mdOffset={2}>
          <h3> Contact Us</h3>
          <ContactPanel contactInfo={this.state.contactInfo} socialMedia={this.state.socialMedia}/>
        </Col>
        <Col md={4}>
          <h3>  Send us a message </h3>
          <Form />
        </Col>
      </Row>
    );
  }
}
