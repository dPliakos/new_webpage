import * as eventActions from './../actions/eventActions.js';
import events from "./../data/myevents.js";
// initial state
const initial = {
  event: {}, //active event
  recentEvents: [], // events.events, 
  pastEvents: [], //events.pastevents,  
  dateLimit_recent: null,
  dateLimit_older: null,
  requestSentOld: false,    //  |
  requestSuccessOld: false, //  |Request handling old
  requestErrorOld: false,   //  |
  requestSentNew: false,    //  |
  requestSuccessNew: false, //  |Request handling new
  requestErrorNew: false,   //  |
  activeIndex: 0,
  eventsPerPage: 3,
  numberOfPages: 0
}


const eventReducer = (state=initial, action) => {
  switch (action.type) {
    /*
      Is used to load an event to store to displaying a single event.
    */
    case eventActions.EVENT_LOAD:
      return state;
      break;
    case eventActions.EVENT_REQUEST_NEW:
      if (!action.payload) action.payload = false;
      const newEventsRequestUpdated = {
        ...state,
        requestSentNew: action.payload
      }
      return newEventsRequestUpdated;
      break;
    case eventActions.EVENT_REQUEST_OLD:
      if (!action.payload) action.payload = false;
      const oldEventsRequestUpdated = {
        ...state,
        requestSentOld: action.payload
      }
      return oldEventsRequestUpdated;
      break;
    case eventActions.EVENT_LOAD_NEW:
      var newState = {
        ...state,
        recentEvents: events.events,
        requestSentNew: false,
        requestSuccessNew: true,
        //recentEvents: []
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
        requestSentOld: false,
        requestSuccessOld: true,
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
