//node modules
import { Link } from "react-router-dom";
import { connect } from "react-redux"
//styling
import "../App.css";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";

export default function Header(props){
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">E-commerce Store</Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/home" className="item col-10">
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
