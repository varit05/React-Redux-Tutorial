import React from "react";
import { connect } from "react-redux";

import { fetchPostFromApi } from "./postsReducer";

class Posts extends React.Component {
  componentDidMount() {
    const { fetchPostFromApi } = this.props;
    fetchPostFromApi();
  }

  render() {
    const { posts } = this.props;
    if (!posts) {
      return null;
    }
    const postItems = posts.map(post => (
      <div key={post.id}>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <React.Fragment>
        <h3>Hello Posts</h3>
        {postItems}
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  fetchPostFromApi
};

const mapStateToProps = state => ({
  posts: state.postReducer.posts
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
