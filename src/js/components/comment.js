import React, { Component, PropTypes } from 'react';

export default class Comment extends Component {
  render() {
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
