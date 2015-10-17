import "babel-core/polyfill";
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import CommentApp from "./containers/CommentApp";
import commentStore from "./stores/Comment";

const store = commentStore();

render(
  <Provider store={store}>
    <CommentApp />
  </Provider>,
  document.getElementById("root")
);
