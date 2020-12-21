import { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { ProductDetails } from "./Details";
import "bootstrap/dist/css/bootstrap.min.css";


export class Product extends Component {
  addProductToCart(id) {
    console.log(id);
  }

  render() {
    return (
      <div className="product w-25 p-3">
        <Link to={`/ProductDetails/${this.props.title}`} className="item">
          <img style={{
            resizeMode: "cover",
            height: 200,
            width: 200
          }}
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
            path={`/ProductDetails/${this.props.title}`}
            render={(props) => (
              <ProductDetails
                {...props}
                id={this.props.id}
                img={this.props.img}
                title={this.props.title}
                price={this.props.price}
                rating={this.props.rating}
                description={this.props.description}
                category={this.props.category}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}
