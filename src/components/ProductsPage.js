import { Product } from "./Product";
import { connect } from "react-redux";

function ProductsPage(props) {
  console.log(props.products)
  return (
    <div>
      <h1>Here's the Product Page</h1>
      <Product
        id={1}
        title={"DummyProduct"}
        img={
          "https://columbusrealestatecoach.com/wp-content/uploads/2017/11/crash-test-dummy.jpg"
        }
        price={10000.99}
        rating={0}
        category={"refrigerator"}
        description={"It's a dummy"}
      />
    </div>
  );
}

const mapStatetoProps = (state) => {
  return { products: state.products };
};

export default connect(mapStatetoProps)(ProductsPage);
