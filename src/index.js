import React from "react";
import ReactDOM from "react-dom";
//Step 2
import { Provider } from "react-redux";

import Posts from "./components/posts/posts.jsx";
import NewPost from "./components/newPost/newPost.jsx";
import "./styles.css";

import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello React Redux Tutorial</h1>
        <NewPost />
        <Posts />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
