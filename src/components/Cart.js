import CartItem from "./CartItem";
import { connect } from "react-redux";
import fetchPosts from "../Api";
import { Link } from "react-router-dom";
import { Row, Button, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Cart(props) {
  let cartItems = [];
  if (props.cart === undefined) {
    fetchPosts();
  } else if (props.cart !== undefined) {
    if (props.cart.length > 0) {
      console.log(props.cart);
      cartItems = props.cart.map((item) => (
        <CartItem
          key={item.id}
          img={item.img}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
          id={item.id}
        />
      ));
    } else if (props.cart.length === 0) {
      cartItems = [];
    }
  }

  return (
    <Container style={{ display: "flex" }}>
      <Col className="col-9">
        <Row>
          <h1>Shopping Cart</h1>
        </Row>
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "space-around",
            flexDirection: "column",
          }}
        >
          {cartItems}
        </div>
      </Col>
      <Col
        className="col-3"
        style={{
          border: "1px solid black",
          maxHeight: 450,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h3>Your Order will be: </h3>
        <div
          style={{
            display: "flex",
            flex: 1,
            alignContent: "center",
          }}
        >
          <Link to="/Confirmation">
            <Button onClick={() => props.clearCart()}>Order Now!</Button>
          </Link>
          <Link to="/Cart">
            <Button onClick={() => props.clearCart()}>Clear Cart</Button>
          </Link>
        </div>
      </Col>
    </Container>
  );
}

const mapStatetoProps = ({ cart } = {}) => {
  return {
    cart: cart,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    clearCart: () =>
      dispatch({
        type: "CLEAR_CART",
        cart: [],
      }),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Cart);
