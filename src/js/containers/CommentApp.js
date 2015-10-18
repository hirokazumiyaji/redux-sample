import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import Comments from "../components/comments";
import CommentForm from "../components/Comment_form";
import {postComment} from "../actions/comment";

class CommentApp extends Component {
  constructor(props) {
    super(props);
    this.onCommentClick = this.onCommentClick.bind(this);
  }

  onCommentClick(text) {
    console.log("onCommentClick");
    this.props.dispatch(postComment(text));
  }

  render() {
    console.log("comment app");
    const { comments, dispatch } = this.props;
    return (
      <div>
        {comments.isRequesting && <h2>Loading...</h2>}
        <Comments comments={comments} />
        <CommentForm onCommentClick={this.onCommentClick} />
      </div>
    );
  }
}

CommentApp.propTypes = {
  isRequesting: PropTypes.bool.isRequired,
  comments: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

function stateToProps(state) {
  console.log("stateToProps");
  const {comments} = state;
  return {
    isRequesting: comments.isRequesting,
    comments: comments.comments
  }
}

export default connect(stateToProps)(CommentApp);
