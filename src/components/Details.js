import { useParams } from "react-router-dom";
import { connect } from "react-redux";

export function ProductDetails(props) {
    
    let { id } = useParams();

  return (
    <div>
      <p>{props.category}</p>
      <h1>{id}</h1>
      <img
        src={props.img}
        alt={props.title}
        width="500"
        height="600"
      />
      <div>
        <p>{props.description}</p>
      </div>
      <p>{props.rating}</p>
      <p>{props.price}</p> 
    </div> 
   
  );
}

const mapStatetoProps = (state) => {
  return { products: state.products };
};

export default connect(mapStatetoProps)(ProductDetails);