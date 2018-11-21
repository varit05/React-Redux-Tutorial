const FETCH_POST = "FETCH_POST";
//Action
const fetchPost = posts => ({ type: "FETCH_POST", payload: posts });

const INITIAL_STATE = {
  posts: null
};

//Action Middleware for dispatch data using redux-thunk
export const fetchPostFromApi = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(postData => {
      dispatch(fetchPost(postData));
    });
};

// REDUCER
export default function postReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POST: {
      return {
        ...state,
        posts: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
