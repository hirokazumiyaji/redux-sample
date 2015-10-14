import React, { findDOMNode, Component, PropTypes } from 'react';

export default class CommentForm extends Component {
  handleClick() {
    const node = findDOMNode(this.refs.input);
    const text = node.value.trim();
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
