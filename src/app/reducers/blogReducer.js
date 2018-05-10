import * as actions from './../actions/blogActions.js';
import blogposts from "./../data/blog_data.js";

// delcare initial state
const initial = {
  post: {}, // active blog
  blog: [],
  activePart: [],
  requestSent: false,
  requestSuccess: false,
  requestError: false,
  activeIndex: 0,
  postsPerPage: 5,
  numberOfPages: 0
}

const blogReducer = (state=initial, action) => {
  switch (action.type) {
    case actions.BLOG_LOAD:
      const wholeBlog = {
        ...state,
        blog: blogposts.blogposts
      }
      return wholeBlog;
      break;    
    case actions.BLOG_LOAD_PART:
      /*
      This action takes a part of the blogposts array.
      */
      if (!action.payload) {
        action.payload = 0;
      } 

      let activePart = [];
      const start = action.payload * state.postsPerPage;
      const limit = start + state.postsPerPage;

      for (var i=start; i<limit; i++) {
        if (state.blog[i] != null) activePart.push(blogposts.blogposts[i]);
      }

      const blog_part = {
        ...state,
        activePart: activePart,
        activeIndex: action.payload,
        requestSent: false,
        requestSuccess: true,
        requestError: false
      };
      return blog_part;
      break;
    case actions.BLOG_REQUEST:
      const requestSent = {
        ...state,
        requestSent: true
      }
      return requestSent;
    case actions.BLOG_SET_NUMBER_OF_PAGES:
      const nop = Math.ceil(state.blog.length / state.postsPerPage);
      const new_nop = {
        ...state,
        numberOfPages: nop
      }
      return new_nop;
      break;
    default: return state;
  }
}

export default blogReducer;