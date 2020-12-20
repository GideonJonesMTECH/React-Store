import React from "react";
import { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Root } from "./components/Root";

import "./index.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="ui menu">
            <Root />
            <div className="right menu"></div>
          </div>
        </div>
      </Router>
    );
  }
}

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
