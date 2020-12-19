import {Component} from 'react'

export class Product extends Component{
 addProductToCart(id){
  console.log(id);
 }
 
 render() {
  return (
   <div className = "product">
    <img className = "productImg" src={this.props.img} alt = {this.props.title}/>
    <h4 className = "productTitle">{this.props.title}</h4>
    <span className = "productRating">{this.props.rating} / 5</span>
    <h5 className="productPrice">{this.props.price}</h5>
    <span></span>
    <button onClick = {this.addProductToCart(this.props.id)}>Add to Cart</button>
   </div>
  )
 }
}