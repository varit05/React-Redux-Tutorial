import { combineReducers } from "redux";
// import newPostReducer from "../components/newPost/newPostReducer";
import postReducer from "../components/posts/postsReducer";

// const appReducers = {
//   fetchPosts: postReducer
// };

const rootReducer = combineReducers({ postReducer });

export default rootReducer;
