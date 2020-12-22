import { Component } from "react";
import { Product } from "./Product";
import {connect} from 'react-redux';
import { products } from "../index";

export class ProductsPage extends Component {
  listOfProducts = []

  render() {
    console.log(this.listOfProducts);
    return (
      <div>
        <h1>Here's the Product Page</h1>
        <Product
          id={0}
          title={"DummyProduct"}
          img={
            "https://columbusrealestatecoach.com/wp-content/uploads/2017/11/crash-test-dummy.jpg"
          }
          price={10000.99}
          rating={0}
          category={"refrigerator"}
          description={"It's a dummy"}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    products: state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    OnLoad: () => dispatch({type: 'LOAD'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);