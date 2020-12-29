import { CartItem } from "./CartItem";
import { connect } from "react-redux";

function Cart(props) {
  let cartItems = [];

  props.cart.forEach((id) => {
    let item = props.products.filter((product) => product.id == id);
    cartItems.push(item[0]);
  });

  console.log(cartItems)

  return (
    <div>
      <h1>This is the Cart Page. Give me your money</h1>
      {cartItems.map((item) => (
        <CartItem
          id={item.id}
          img={item.img}
          title={item.title}
          rating={item.rating}
          price={item.price}
          description={item.description}
          category={item.category}
        />
      ))}
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    products: state.products,
    cart: state.cart,
  };
};

export default connect(mapStatetoProps)(Cart);
