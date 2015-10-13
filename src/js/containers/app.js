import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <Comments comments= />
        <CommentForm onAddClick={text => dispatch(addComment(text))} />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(App);
