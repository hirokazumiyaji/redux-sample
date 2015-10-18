import React, { Component, PropTypes } from 'react';
import Comment from "./comment";

export default class Comments extends Component {
  render() {
    console.log("Comments.render");
    return (
      <ul>
        {this.props.comments.map((comment, index) =>
          <Comment text={comment} key={index} />
        )}
      </ul>
    );
  }
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired
};
