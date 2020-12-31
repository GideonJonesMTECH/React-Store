import React from "react";
import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ProductDetails from "./Details";
import ProductsPage  from "./ProductsPage";
import Cart  from "./Cart";
import ConfirmationPage from "./ConfirmationPage";

import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Header";
import { Footer } from "./Footer";

export class Root extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col col-xs-offset-1">
            <Header />
            <Switch>
              <Route exact path="/home" component={ProductsPage}/>
              <Route path="/Cart" component={Cart} />
              <Route path="/ProductDetails/:id" component={ProductDetails} />
              <Route path="/Confirmation" component={ConfirmationPage} />
            </Switch>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}


