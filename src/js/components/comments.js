import React, { Component, PropTypes } from 'react';

export default class Comments extends Component {
  render() {
  }
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
  }).isRequired).isRequired
}
