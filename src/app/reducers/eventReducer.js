import * as eventActions from './../actions/eventActions.js';
import events from "./../data/myevents.js";
// initial state
const initial = {
  event: {}, //active event
  recentEvents: [], // events.events, 
  pastEvents: [], //events.pastevents,  
  dateLimit_recent: null,
  dateLimit_older: null,
  requestSent: false,    //  |
  requestSuccess: false, //  |Request handling
  requestError: false,   //  |
  activeIndex: 0,
  eventsPerPage: 3,
  numberOfPages: 0
}

/*
EVENT_LOAD
EVENT_LOAD_RECENT
EVENT_LOAD_OLD
EVENT_LOAD_ALL
EVENT_SET_REQUEST
EVENT_SET_SUCCESS 
EVENT_SET_ERROR
EVENT_SET_EVENTS_PER_PAGE
EVENT_ADD_NEW
*/


const eventReducer = (state=initial, action) => {
  switch (action.type) {
    /*
      Is used to load an event to store to displaying a single event.
    */
    case eventActions.EVENT_LOAD:
      return state;
      break;
    case eventActions.EVENT_LOAD_RECENT:
      var newState = {
        ...state,
        recentEvents: events.events
      }
      return newState;
    break;
    case eventActions.EVENT_LOAD_OLD: 
      if (!action.payload) {
        action.payload = 0;
      } 

      let pastEvents = [];
      const start = action.payload * state.eventsPerPage;
      const limit = start + state.eventsPerPage;
      for (var i=start; i<limit; i++) {
        if (events.pastevents[i] != null) pastEvents.push(events.pastevents[i]);
      }
      var newState = {
        ...state,
        activeIndex: action.payload,
        pastEvents: pastEvents
      }
      return newState
      break;
    case eventActions.EVENT_SET_NUMBER_OF_PAGES:
      const nop = Math.ceil(events.pastevents.length / 3);
      var newState = {
        ...state,
        numberOfPages: nop
      }
      return newState;
      break;
    default: return state;
  }
  return state;
}

export default eventReducer;
