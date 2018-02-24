import React from 'react';
import BlogPost from './blogpost.js';
import {Switch, Route } from 'react-router-dom';
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
