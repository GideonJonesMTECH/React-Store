import { connect } from "react-redux";

function CartItem(props){
  return(
   <div>
     <img style={{
      resizeMode: "cover",
      height: 200,
      width: 200
      }}
      src={props.img}
      alt={props.title}>
     </img>
     <div className="CartItemText">
      <h3 className="CartItemTitle">{props.title}</h3> 
      <h3 className="CartItemPrice">${props.price}</h3>
      <label htmlFor="Quantity">Quantity:</label>
      <select name="Quantity">
       <option value="1">{props.quantity}</option>
      </select>
      <button onClick={() => props.removeItem(props.id)}>Remove</button>
     </div>
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