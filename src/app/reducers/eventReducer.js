import * as eventActions from './../actions/eventActions.js';
import events from "./../data/myevents.js";
// initial state
const initial = {
  event: {}, //active event
  recentEvents: events.events, 
  pastEvents: events.pastevents,  
  dateLimit_recent: null,
  dateLimit_older: null,
  requestSent: false,    //  |
  requestSuccess: false, //  |Request handling
  requestError: false,   //  |
  lastIndex: 0,  // last event showed
  eventsPerPage: 5
}

/*
EVENT_LOAD
EVENT_LOAD_RECENT
EVENT_LOAD_OLD
EVENT_LOAD_ALL
EVENT_SET_REQUEST
EVENT_SET_SUCCESS 
EVENT_SET_ERROR
EVENT_SET_LAST_INDEX 
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
    case eventActions.EVENT_LOAD_ALL:
      state = {
        ...state,
        loadedEvents: action.payload
      }
    break;
    default: return state;
  }
  return state;
}

export default eventReducer;
