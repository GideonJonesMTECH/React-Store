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
      <Row style={{ display: "flex", justifyContent: "space-between", flex: 1}}>
        <h1>Shopping Cart</h1>
        <div style={{ display: "flex", flex: 1, justifyContent: "space-around", alignContent: "center"}}>
        <Link to="/Confirmation">
          <Button onClick={() => props.clearCart()}>Order Now!</Button>
        </Link>
        <Link>
          <Button onClick={() => props.clearCart()}>Clear Cart</Button>
        </Link>
        </div>
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
