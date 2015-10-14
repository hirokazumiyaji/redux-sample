import React, { Component, PropTypes } from 'react';

export default class Comments extends Component {
  render() {
    return (
      <ul>
        {this.props.comments.map((comment, index) =>
          <Comment {...comment} key={index} />
        )}
      </ul>
    );
  }
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
  }).isRequired).isRequired
};
