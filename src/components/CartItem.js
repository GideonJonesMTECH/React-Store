import {Component} from 'react';

export class CartItem extends Component{
 render(){
  return(
   <div>
     <img style={{
      resizeMode: "cover",
      height: 200,
      width: 200
      }}
      src={this.props.img}>
     </img>
     <div className="CartItemText">
      <h3 className="CartItemTitle">{this.props.title}</h3> 
      <h3 className="CartItemPrice">${this.props.price}</h3>
      <label htmlFor="Quantity">Quantity:</label>
      <select name="Quantity">
       <option value="1">1</option>
       <option value="2">2</option>
       <option value="3">3</option>
       <option value="4">4</option>
       <option value="5">5</option>
       <option value="6">6</option>
       <option value="7">7</option>
       <option value="8">8</option>
       <option value="9">9</option>
       <option value="10">10</option>
      </select>
      <button>Remove</button>
     </div>
   </div>
  );
 }
}
