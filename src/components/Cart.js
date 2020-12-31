import  CartItem  from "./CartItem";
import { connect } from "react-redux";

function Cart(props) {
  let cartItems = [];
  let reRender = 

  if (props.cart.length > 0){
    cartItems = props.cart.map((item) => (
      <CartItem img={item[0]} title={item[1]} price={item[2]} quantity={item[3]} id={item[4]}/>
    ));
  } else {
    cartItems = [];
  }
  return (
    <div>
      <h1>This is the Cart Page. Give me your money</h1>
      {cartItems}
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    cart: state.cart
  };
};

export default connect(mapStatetoProps)(Cart);
