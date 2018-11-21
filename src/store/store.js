import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

// const middleWare = [thunk];

const configureStore = initialState =>
  createStore(rootReducer, initialState, applyMiddleware(thunk));

const store = configureStore(initialState);

export default store;
