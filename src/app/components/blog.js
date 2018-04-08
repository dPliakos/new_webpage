import React from 'react';
import BlogPost from './blogpost.js';
import {Row, Col} from 'react-bootstrap';
import {Switch, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import blogpost from './blogpost.js';
import blogposts from './../data/blog_data.js'
import 'bootstrap/dist/css/bootstrap.css';


class DateTag extends React.Component {
  render() {
    return (<div> 12 <br/> Dec </div>);
  }
}

class ReadMore extends React.Component {
  render() {
    return <div> ReadMore </div>
  }
}


class RowPreview extends React.Component {

  limit(text, max) {
    return <p> {text.substring(0, max)} </p>
  }

  render() {
    return(
      <div>
      <Row>
        <Col md={1}>
          <DateTag />
        </Col>
        <Col md={10}>
          <h3> {this.props.title} </h3>
          <p> {this.limit(this.props.content, 250)} </p>
        </Col>
      </Row>
      <Row>
        <Col md={4} mdOffset={8}>
          <Link to={`/blog/${this.props.title.toLowerCase()}`}>
            Continue Reading
          </Link>

        </Col>
      </Row>
      </div>
    );
  }
}

class BlogIndex extends React.Component {
  render() {
    const posts = blogposts.blogposts;
    return (
      <div>
        <Row>
          <Col mdOffset={2}>
            <h2> Blog </h2>
          </Col>
        </Row>
        <Row>
          <Col md={8} mdOffset={2} >
            {posts.map((post)=>{ return <RowPreview title={post.title} content={post.content}/>  })}
          </Col>
        </Row>
      </div>
    );
  }
}


export default class Blog extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path={this.props.match.path + "/:title"} component={BlogPost} />
        <Route exact path="/blog" component={BlogIndex} />
      </Switch>
    );
  }
}
