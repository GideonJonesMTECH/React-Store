import { useParams } from "react-router-dom";
import { connect } from "react-redux";

function ProductDetails(props) {
    let { id } = useParams();
    const product = props.products.filter((product) => product.id == id);
    const productInfo = product[0];
    console.log(productInfo);
  return (
    <div>
      <p>{productInfo.category}</p>
      <h1>{productInfo.title}</h1>
      <img
        src={productInfo.img}
        alt={productInfo.title}
        width="500"
        height="600"
      />
      <div>
        <p>{productInfo.description}</p>
      </div>
      <p>{productInfo.rating}</p>
      <p>{productInfo.price}</p> 
    </div> 
   
  );
}

const mapStatetoProps = (state) => {
  return { products: state.products };
};

export default connect(mapStatetoProps)(ProductDetails);