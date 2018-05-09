import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link, Route, Switch, Redirect} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import './../style/about.css';
import './../style/main.css';
import {Row, Col, Button, ButtonGroup} from 'react-bootstrap';
import aboutData from './../data/about_data.js';
import 'bootstrap/dist/css/bootstrap.css';
import img from './../img/profile.jpg';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import fa_icons from "./../data/faIcons.js";


class SocialIcon extends React.Component {
  // to do use redux to update social tags
  render() {
    return (
      <LinkContainer to={this.props.target} className="inline padding5">
        <div> <FontAwesome name={this.props.icon} className="small-social" /> </div>
      </LinkContainer>
    );
  }
}

class SocialRow extends React.Component {
  render() {
    const row = this.props.social.map((medium, i)=>{
      const icon_final = fa_icons[medium.label];
      return <SocialIcon target="#" icon={icon_final} key={i}/>;
    });

    return (
      <div>
        {row}
      </div>
    )
  }
}

class MemberSmall extends React.Component {
  render() {
    return (
      <div className="topSpacer">
          <Row > 
            <Col md={10} mdOffset={1} >
              <img src={this.props.img == null ? img : this.props.img} className="" className="aboutProfileImg"/>
            </Col>
          </Row>
          <Row> 
            <Col md={11} className="dark marign" mdOffset={1}>
              <div className="roundedCorners padding2" > 
                {this.props.label} 
              </div>
              {<SocialRow social={this.props.social}/>}
            </Col>
          </Row>
      </div>
    );
  }
}

class Members extends React.Component {
  constructor() {
    super();
    this.state = {
      members: []
    }
  }

  componentDidMount() {
    this.className = "";
  }

  componentWillMount() {
    this.parseMembers();
  }

  parseMembers() {
    const step = 4;
    const memberList = this.props.members;
    let allMembers = [];

    for (let i=0; i<memberList.length; i+= step) {
      const teamsOfThree = memberList.slice(i, i+step);
      
      const completedRow = teamsOfThree.map((person, i)=>{
        return <Col md={3} key={i}> <MemberSmall img={person.img} label={person.name} social={person.social} key={i}/> </Col>;
      });
      allMembers = allMembers.concat([completedRow]);
    }

    this.setState({members: allMembers});
  }

  render() {
    console.log("state:");
    console.log(this.state.members);
    const members = this.state.members;

    return (
      <div className="about-main-panel" >
          {members.map((row, i)=>{
            return (<Row key={i}> {row} </Row>)
          })}
      </div>
    );
  }
}

class AboutParagraph extends React.Component {
  render() {
    return (
      <div>
        <h3> {this.props.header}</h3>
        <p> {this.props.body} </p>
      </div>
    );
  }
}

class AboutBullets extends React.Component {
  render() {
    return (
      <div>
        <h3> {this.props.header} </h3>
        <ul>
          {this.props.body.map(
            (bullet, i)=>{return <li key={i}> {bullet} </li>}
          )}
        </ul>
      </div>
    );
  }
}

class AboutIEEE extends React.Component {

  componentDidMount() {
    this.className = "";
  }

  render() {

    const abstract = aboutData.aboutData.abstract;
    const activities = aboutData.aboutData.activities;
    const whyMemeber = aboutData.aboutData.whyBecomeAMemeber;
    const benefits = aboutData.aboutData.benefits;
    const subscribe = aboutData.aboutData.subscribe;

    return (
      <div className="about-main-panel" >
        <AboutParagraph header={abstract.header} body={abstract.body} />
        <AboutBullets header={activities.header} body={activities.body} />
        <AboutParagraph header={whyMemeber.header} body={whyMemeber.body} />
        <AboutBullets   header={benefits.header}   body={benefits.body} />
        <AboutParagraph header={subscribe.header}  body={subscribe.body} />
      </div>
    );
  }
}

class MenuItem extends React.Component {

  render() {
    return (
      <LinkContainer to={"/about/" + this.props.title} >
      <div className="light full-width centered roundedCorners about-navigation "  > 
        <span> {this.props.title} </span> 
      </div>
      </LinkContainer>
    );
  }
}

class Menu extends React.Component {

  render() {

    return (
      <div>
        <Row>
            <Col md={3}>
              <MenuItem title="branch" />
            </Col>
            <Col md={3}>
              <MenuItem title="IEEE" />
            </Col>
            <Col md={3}>
              <MenuItem title="Members" />
            </Col>
            <Col md={3}>
              <MenuItem title="Dev_Team" />
            </Col>
        </Row>
      </div>
    );
  }

}


export default class About extends React.Component {

constructor() {
    super();
    this.state ={
      contributors: [],
      success: false,
      error: false,
    }
  }

  componentWillMount() {
    this.getContributors();
  }

  getContributors(){
    if (this.state.success) {
      console.log("returning");
      return;
    }
    console.log("getting contributors");
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const myInit = { method: 'GET',
                   headers: myHeaders,
                   mode: 'cors',
                   cache: 'default' };
    
    fetch("https://api.github.com/repos/ieee-ateith-sb/new_webpage/contributors", myInit)
      .then((res) => {
        return res.json();
      })
      .then((json)=>{
        const profiles = this.parseGithubProfiles(json);
        this.setState({error: false, success: true, contributors: profiles});
      });
  }

  parseGithubProfiles(list) {
    const profiles = list.map((person)=>{
      return {
        name: person.login,
        img: person.avatar_url,
        social: [{
          label: "github",
          icon: "github",
          url: person.html_url
        }]
      }
    })
    return profiles;
  }
  

  render() {
    const members = aboutData.aboutData.members;

	  return (
	   <div>
	  	<Row>
        <Col md={10} mdOffset={1}  className="topSpacer">
          <Menu />
        </Col>
        </Row>
        <Row>
        <Col md={10} mdOffset={1}>
          <Switch>
            <Route exact path={"/about"} component={()=><Redirect to="/about/branch" />} />
            <Route exact path={"/about/branch"} component={()=><AboutIEEE className="about-main-panel"  />} />
            <Route exact path={"/about/IEEE"} component={()=><AboutIEEE className="about-main-panel" />}/>
            <Route exact path={"/about/Members"} component={()=><Members members={members} className="about-main-panel"  />} />
            <Route exact path={"/about/Dev_Team"} component={()=><Members members={this.state.contributors} className="about-main-panel"  />} />
          </Switch>
        </Col>
      </Row>
	   </div>
	  );
  }
}
