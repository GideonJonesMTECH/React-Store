//node modules
import { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";

//styling
import "../App.css";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";

export class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">E-commerce Store</Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/" className="item col-10">
              Home
            </Link>
            <Link to="/Cart" className="item col-2">
              <div>
                <img
                  style={{
                    resizeMode: "cover",
                    height: 30,
                    width: 30,
                  }}
                  className="cart"
                  src={"https://cdn0.iconfinder.com/data/icons/ecommerce-57/100/Ecommerce_RTE-03-512.png"}
                />
              </div>
            </Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        
      </div>
    );
  }
}
