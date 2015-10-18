import React, { Component, PropTypes } from 'react';

export default class Comment extends Component {
  render() {
    console.log("Comment.render");
    return (
      <li>
        {this.props.text}
      </li>
    );
  }
}

Comment.propTypes = {
  text: PropTypes.string.isRequired,
};
