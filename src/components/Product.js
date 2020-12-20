import { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { ProductDetails } from "./Details";
export class Product extends Component {
  addProductToCart(id) {
    console.log(id);
  }

  render() {
    return (
      <div className="product">
        <Link to={`/ProductDetails/${this.props.title}`} className="item">
          <img
            className="productImg"
            src={this.props.img}
            alt={this.props.title}
          />
        </Link>

        <h4 className="productTitle">{this.props.title}</h4>
        <span className="productRating">{this.props.rating} / 5</span>
        <h5 className="productPrice">{this.props.price}</h5>
        <span></span>
        <button onClick={this.addProductToCart(this.props.id)}>
          Add to Cart
        </button>
        <Switch>
          <Route
            exact path={`"/ProductDetails/${this.props.title}"`}
            render={ (props) => 
              <ProductDetails
                id={this.props.id}
                img={this.props.img}
                title={this.props.title}
                price={this.props.price}
                rating={this.props.rating}
                description={this.props.description}
                category={this.props.category}
                {...props}
              />
            }
          />
        </Switch>
      </div>
    );
  }
}
