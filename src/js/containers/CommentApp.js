import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

class CommentApp extends Component {
  render() {
    const { comments, dispatch } = this.props;
    return (
      <div>
        <Comments comments={comments} />
        <CommentForm onAddClick={text => dispatch(addComment(text))} />
      </div>
    );
  }
}

App.propTypes = {
  isRequesting: PropTypes.bool.isRequired,
  comments: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

function stateToProps(state) {
  const { comments } = state;
  const {
    isRequesting,
    items
  } = comments || {
    false,
    []
  };
  return {
    isRequesting,
    items
  }
}

export default connect()(CommentApp);
