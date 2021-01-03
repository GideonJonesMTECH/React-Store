import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function CartItem(props){
  return(
   <div style={{padding: 10}}>
    <Row>
      <Col style={{width: 100}}>
        <div style={{height:100, width:100, textAlign:"center"}}>
        <Link to={`/ProductDetails/${props.id}`} className="item">
          <img 
            style={{
              resizeMode: "contain",
              height: "100%",
              overflow: "hidden",
              width: "auto",
            }}
            className="productImg"
            alt={props.title}
            src={props.img}
          />
          </Link>
        </div>
      </Col>
      <Col>
        <div className="CartItemText">
          <h5 className="CartItemTitle">{props.title}</h5> 
          <h6 className="CartItemPrice">${props.price}</h6>
          <label htmlFor="Quantity">Quantity:</label>
          <select name="Quantity">
            <option value="1">{props.quantity}</option>
          </select>
          <button onClick={() => props.removeItem(props.id)}>Remove</button>
        </div>
      </Col>
     </Row>
   </div>
  );
 }


const mapDispatchtoProps = (dispatch) => {
  return {
    removeItem: (itemId) => 
    dispatch({ 
      type: "REMOVE_ITEM",
      id: itemId
    }),
  };
};

export default connect(null,mapDispatchtoProps)(CartItem);