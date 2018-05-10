import React from 'react';
import { connect } from 'react-redux';
import BlogPost from './blogpost.js';
import {Row, Col} from 'react-bootstrap';
import {Switch, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import blogpost from './blogpost.js';
import blogposts from './../data/blog_data.js'
import PaginatedList from './paginatedList.js'
import store from './../../store.js';
import * as actions from './../actions/blogActions.js'
import 'bootstrap/dist/css/bootstrap.css';
import './../style/main.css';
import './../style/blogpost.css';



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
      <div className="light topSpacer roundedCorners padding10 blogPreview">
        <Row>
          <Col md={1}>
            <DateTag />
          </Col>
          <Col md={10}>
            <h3> {this.props.title} </h3>
             {this.limit(this.props.content, 250)} 
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

    // // initialize pagination
    const postsPerPage = this.props.redux.postsPerPage;
    const numberOfPages = Math.ceil(this.props.redux.blog.length/postsPerPage);
    const needsPagination = numberOfPages > 1;
    let pagination = (<div> </div>);

    if (needsPagination) {
      pagination = (
        <Row>
          <Col md={8} mdOffset={2}>
            <PaginatedList numberOfPages={numberOfPages} active={this.props.redux.activeIndex}
            activateIndex={(index)=>{store.dispatch({
              type: actions.BLOG_LOAD_PART,
              payload: index
            })}} 
            maximumPages={1}
            />
          </Col>
        </Row>
      );
    }

    return (
      <div>
        <Row>
          <Col mdOffset={2}>
            <h2> Blog </h2>
          </Col>
        </Row>
        <Row>
          <Col md={8} mdOffset={2} >
            {this.props.redux.activePart.map((post, i)=>{ 
              return <RowPreview title={post.title} content={post.content} className="testBordered" key={i}/>  
            })}
          </Col>
        </Row>
        <Row>
          <Col className="topSpacer">
            {pagination}
          </Col>
        </Row>
      </div>
    );
  }
}


export default class Blog extends React.Component {


  componentWillMount() {
    store.dispatch({
      type: actions.BLOG_REQUEST,
      payload: true
    });
    store.dispatch({
      type: actions.BLOG_LOAD,
      payload: true
    });
    store.dispatch({
      type: actions.BLOG_SET_NUMBER_OF_PAGES
    });
    store.dispatch({
      type: actions.BLOG_LOAD_PART
    });
    
  }

  render() {

  const mapStateToProps = function(store) {
    return {
      redux: store.blog
    };
  }

    return (
      <Switch>
        <Route exact path={this.props.match.path + "/:title"} component={BlogPost} />
        <Route exact path="/blog" component={connect(mapStateToProps)(BlogIndex)} />
      </Switch>
    );
  }
}
