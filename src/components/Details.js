import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Row, Col} from 'react-bootstrap';

function ProductDetails(props) {
    let { id } = useParams();
    const product = props.products.filter((product) => product.id == id);
    const productInfo = product[0];
  return (
    <div>
      <p>{productInfo.category}</p>
      <h1>{productInfo.title}</h1>
      <Row>
        <Col>
          <img
            src={productInfo.img}
            alt={productInfo.title}
            width="auto"
            height="500"
          />
        </Col>
        <Col>
          <h5>${productInfo.price}</h5>
          <h6>{productInfo.description}</h6>
          <p>{productInfo.rating} / 5</p>
          <button onClick={() => props.addToCart([productInfo.img, productInfo.title, productInfo.price, 1, productInfo.id])}>
            Add to Cart
          </button>
        </Col>
      </Row>
    </div> 
   
  );
}

const mapStatetoProps = (state) => {
  return { products: state.products };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    addToCart: (item) => 
    dispatch({ 
      type: "ADD_TO_CART",
      item: item 
    }),
  };
};

export default connect(mapStatetoProps,mapDispatchtoProps)(ProductDetails);