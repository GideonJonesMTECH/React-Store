import { Product } from "./Product";
import { connect } from "react-redux";

function ProductsPage(props) {
  console.log(props.products)
  return (
    <div>
      <h1>Here's the Product Page</h1>
      <div>
      {props.products.map((product, index) => (
        <Product 
          id = {product.id}
          img = {product.img}
          title={product.title}
          rating={product.rating}
          price={product.price}
          description={product.description}
          category={product.category}
        />
      ))}
      </div>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return { products: state.products };
};

export default connect(mapStatetoProps)(ProductsPage);
