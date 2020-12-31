import "../App.css";
import { Navbar, Button } from "react-bootstrap";
import { Component } from "react";

export class Footer extends Component {
 toTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
 };

 render() {
  return (
   <div>
    <Navbar bg="light" variant="light">
     <Navbar.Brand>E-commerce Store</Navbar.Brand>
     <Button onClick={this.toTop} variant="outline-info">Back To Top</Button>
    </Navbar>
   </div>
  )
 }
}
