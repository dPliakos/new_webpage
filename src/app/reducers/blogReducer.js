const blogReducer = (state = {
  post: {},
  loadedPosts: []
}, action) => {
  switch (action.type) {
    case "BLOG_LOAD":
      state = {
        ...state,
        post: {},
        loadedPosts: [...state.loadedPosts, action.payload]
      };
      break;
  }
}
