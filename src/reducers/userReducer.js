import * as actions from './../actions/userActions.js';
import events from "./../data/myevents.js";

// test data
const users = [
{
  username: "user",
  isAdmin: false,
  name: "User",
  lastName: "User",
  email: "user@usermail.com",
  location: "Where the users roam",
  info: "I'm a user. I like to use things!"
}, {
  username: "admin",
  isAdmin: true,
  name: "Admin",
  lastName: "Admin",
  email: "admin@usermail.com",
  location: "Where the admins roam",
  info: "I'm an admin. I like to be administrator!"
}]

// initial state
const initial = {
  user: {},
  loggedIn: false,
  requestSent: false,
  requestSuccess: false,
  requestError: false,
}

const userReducer = (state=initial, action) => {
  switch (action.type) {
    case actions.LOGIN:
      const loggedInUser = {
        ...state,
        user: users[action.payload],
        loggedIn: true,
        requestSuccess: true
      }
    return loggedInUser;
    break;
    
    case actions.LOGOUT:
      const loggedOutUser = {
        ...state,
        user: {},
        loggedIn: false,
        requestSuccess: true
      }
    return loggedOutUser;
    break;
    case actions.REGISTER:
      const registeredUser = {
        ...state,
        user: users.push(action.paylod),
        loggedIn: true,
        requestSuccess: true
      }

    return registeredUser;
    break;
    default: return state;
  }
}

export default userReducer;