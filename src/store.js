import {createStore , combineReducers, applyMiddleware} from "redux";

// import logger from "redux-logger";
// import thunk from "redux-thunk";
// import promise from "redux-promise-middleware";

// import reducers
import eventReducer from "./app/reducers/eventReducer.js";



// new 
const reducers = combineReducers({
  eventsState: eventReducer
});

const store = createStore(reducers);

export default store;
/*
getEvents(type=0) {
  if (type === 0) {
  // a typical 'get' like request for demo
  fetch("http://192.168.1.3:3001/events").then( (responce)=> {
    return responce.json();
  }).then((result)=> {
    this.setState({events: result});
  })} else if (type === 1){
    // post request asking only new events
    this.postData('http://192.168.1.3:3001/events', {mode: 1})
    .then(data => this.setState({events: data})) // JSON from `response.json()` call
    .catch(error => console.error(error))
  } else if (type === 2){
    // post request aksing all events
    this.postData('http://192.168.1.3:3001/events', {mode: 2})
    .then(data => this.setState({events: data})) // JSON from `response.json()` call
    .catch(error => console.error(error))
  } else {
    // post request asking old events
    this.postData('http://192.168.1.3:3001/events', {mode: 3})
    .then(data => this.setState({events: data})) // JSON from `response.json()` call
    .catch(error => console.error(error))
  }
}


 postData(url, data) {
  // Default options are marked with *
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *same-origin
    redirect: 'follow', // *manual, error
    referrer: 'no-referrer', // *client
  })
  .then(response => response.json()) // parses response to JSON
}
*/
