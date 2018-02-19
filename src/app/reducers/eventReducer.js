const eventReducer = (state = {
  event: {},
  loadedEvents: []
}, action) => {
  switch (action.type) {
    case "EVENT_LOAD":
      state = {
        ...state,
        event: {},
        loadedEvents: [...state.loadedEvents, action.payload]
      };
      break;
      case "EVENT_INDEX_NEW":
        state = {
          ...state,
          events: {},
          loadedEvents: [...state.loadedEvents, action.payload]
      }
  }
}
