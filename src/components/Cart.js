import CartItem from "./CartItem";
import { connect } from "react-redux";
import fetchPosts from "../Api";
import { Link } from "react-router-dom";
import { Row, Button } from "react-bootstrap";

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
    <div>
      <h1>This is the Cart Page. Give me your money</h1>
      <Row>
        <Link to="/Confirmation">
          <Button onClick={() => props.clearCart()}>Order Now!</Button>
        </Link>
        <Button onClick={() => props.clearCart()}>Clear Cart</Button>
      </Row>

      {cartItems}
    </div>
  );
}

const mapStatetoProps = ({cart} = {}) => {
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
