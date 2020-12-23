import { Product } from "./Product";
import { connect } from "react-redux";

import { Container, Row, Col} from 'react-bootstrap';

function ProductsPage(props) {
  console.log(props.products)
  return (
    <div>
      <Row>
        <h1>E-Commerce Store</h1>
      </Row>
      <Row style={{justifyContent:"center"}}>
      {props.products.map((product) => (
          <Product
            id = {product.id}
            img = {product.img}
            title={product.title}
            rating={product.rating}
            price={product.price}
            description={product.description}
            category={product.category}
          />
      )
      )}
      </Row>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return { products: state.products };
};

export default connect(mapStatetoProps)(ProductsPage);
