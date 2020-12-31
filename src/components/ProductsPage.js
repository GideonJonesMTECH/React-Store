import Product  from "./Product";
import { connect } from "react-redux";
import { Row } from 'react-bootstrap';

function ProductsPage(props) {  
  let products = [];
  console.log(props.filteredProducts);

  if(props.filteredProducts != undefined && props.filteredProducts.length > 0) {
    products = props.filteredProducts.map((product) => (
      <Product
        key={product.id}
        id = {product.id}
        img = {product.img}
        title={product.title}
        rating={product.rating}
        price={product.price}
        description={product.description}
        category={product.category}
      />
    )
  )
  }
  else {
    products = props.products.map((product) => (
      <Product
        key={product.id}
        id = {product.id}
        img = {product.img}
        title={product.title}
        rating={product.rating}
        price={product.price}
        description={product.description}
        category={product.category}
      />
    )
  )
  }
  return (
    <div>
      <Row>
        <h1>E-Commerce Store</h1>
      </Row>
      <Row style={{justifyContent:"center"}}>
      {products}
      </Row>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return { 
    products: state.products,
    cart: state.cart,
    filteredProducts: state.filteredProducts
   };
};

export default (connect(mapStatetoProps)(ProductsPage));
