import React, { Component, PropTypes } from 'react';
import ReactDOM from "react-dom";

export default class CommentForm extends Component {
  handleClick(e) {
    const node = ReactDOM.findDOMNode(this.refs.input);
    const text = node.value.trim();
    console.log("CommentForm.handleClick=" + text);
    this.props.onCommentClick(text);
    node.value = '';
  }

  render() {
    return (
      <div>
        <textarea ref="input"></textarea>
        <button onClick={(e) => this.handleClick(e)}>
          Send
        </button>
      </div>
    );
  }
}

CommentForm.propTypes = {
  onCommentClick: PropTypes.func.isRequired
}
