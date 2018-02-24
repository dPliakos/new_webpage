import React from 'react';
import BlogPost from './blogpost.js';
import ERROR from './not_found.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export default class Blog extends React.Component {
  render() {
    return(
      <center>
        <Switch>
          <Route path="/blog/:title" component={BlogPost} />
        </Switch>
      </center>
    );
  }
}
