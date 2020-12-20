//node modules
import { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
//components
import { ProductsPage } from "./ProductsPage";
import { Cart } from "./Cart";
//styling
import "../App.css";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Tight-wad Haven</Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/ProductPage" className="item">
              Home 
            </Link>
            <Link to="/Cart" className="item">
              Cart
            </Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <Switch>
          <Route path="/ProductPage" component={ProductsPage} />
          <Route path="/Cart" component={Cart} />
        </Switch>
      </div>
    );
  }
}
