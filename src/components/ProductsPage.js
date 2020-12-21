import { Component } from "react";
import { Product } from "./Product";

function extractDataFromCall(data) {
  let arr = [];
  data.forEach((element) => arr.push(element));

  return arr;
}

export class ProductsPage extends Component {
  listOfProducts = [];

  componentDidMount() {
    const getAPIInfo = async (url) => {
      const apiRequest = await fetch(url);
      const products = await apiRequest.json();
      let data = await extractDataFromCall(products);
      return data;
    };

    getAPIInfo(
      "https://my-json-server.typicode.com/tdmichaelis/json-api/products"
    ).then((response) => {
      this.listOfProducts = response;
      this.forceUpdate();
    });
  }

  populateStore(data) {
    console.log("Went into function!");
  }

  render() {
    console.log(this.listOfProducts);
    if (this.listOfProducts.length > 1) {
      this.populateStore(this.listOfProducts);
    }
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
