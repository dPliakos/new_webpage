import React from 'react';
import {Navbar, Nav, NavItem, Grid, Row, Col} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import blogposts from './data/blog_data.js';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './style/main.css';
import './style/blogpost.css';


export default class BlogPost extends React.Component {

  findBlogpost(title) {
    const all = blogposts.blogposts;
    for (var post in all)
      if (all[post].title.toLowerCase() === title) return all[post];
  }

  render() {
    const blogpost = this.findBlogpost(this.props.match.params.title);
    if (!blogpost) return <p> Error </p>;
    return (
      <div>
      <Row>
        <Col md={1} className="sideBar">
          <Row>
            <Col className="sideButton">
              <Link to="/blog"> <FontAwesome name="times" /> </Link>
            </Col>
            <Col className="sideButton">
            </Col>
            <Col className="sideSpacer">

            </Col>
          </Row>
        </Col>
        <Col md={10}  className="blogpost">
          <Row>
            <Col md={1}>
            </Col>
            <Col md={10} mdOffset={1} className="blogpostTitle">
              <span > {blogpost.title} </span>
              <h4> {blogpost.author} </h4>
            </Col>
          </Row>
          <Row>
            <Col md={10} mdOffset={2}>

            </Col>
          </Row>
          <Row>
            <Col md={8} mdOffset={2}>
                {blogpost.content}
            </Col>
          </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
