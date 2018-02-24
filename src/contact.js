import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Row, Col, Button} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import './style/contact.css';

import contactInfo from './data/testData.js';
import socialMedia from './data/testData.js';


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
  render() {
    return(
      <div className="topSpacer">
        <input type={this.props.type} id={this.props.id} placeholder={this.props.name}/>
      </div>
    );
  }
}

class Form extends React.Component {
  render() {
    return(
      <div className="contactForm">
        <FormUnit name="Name" type="text" id="userName" />
        <FormUnit name="Email" type="text" id="userEmail" />
        <FormUnit name="Subject" type="text" id="userSubject" />
        {/*<label> Message </label> <br/>*/}
        <textarea id="userMessage" placeholder="Message" className="topSpacer"></textarea>
        <Button type="submit"> Send Message </Button>
      </div>
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
