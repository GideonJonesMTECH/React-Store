import { Route, Link, Switch } from "react-router-dom";
import ProductDetails from "./Details";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";


function Product(props){
    return (
      <div className="product w-25 p-3" style={{textAlign:"center", margin: 20}}>
        <Link to={`/ProductDetails/${props.id}`} className="item">
          <div style={{height:200, width:200, textAlign:"center"}}>
            <img style={{
              resizeMode: "contain",
              height: "100%",
              width: "auto",
              overflow: "hidden",
            }}
              className="productImg"
              src={props.img}
              alt={props.title}
            />
          </div>
        </Link>
        <h4 className="productTitle">{props.title}</h4>
        <span className="productRating">{props.rating} / 5</span>
        <h5 className="productPrice">${props.price}</h5>
        <span></span>
        <button onClick={() => props.addToCart(props.id)}>
          Add to Cart
        </button>
        <Switch>
          <Route
            path={`/ProductDetails/${props.title}`}
            render={(props) => (
              <ProductDetails
                {...props}
                id={props.id}
                img={props.img}
                title={props.title}
                price={props.price}
                rating={props.rating}
                description={props.description}
                category={props.category}
              />
            )}
          />
        </Switch>
      </div>
    );
}


const mapDispatchtoProps = (dispatch) => {
  return {
    addToCart: (id) => 
    dispatch({ 
      type: "ADD_TO_CART",
      item: id 
    }),
  };
};

export default connect(null,mapDispatchtoProps)(Product);
