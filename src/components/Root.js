import React from "react";
import { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Header } from "./Header";

export class Root extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col col-xs-offset-1">
            <Header />
          </div>
        </div>
      </div>
    );
  }
}