import { Component } from 'react';


function extractDataFromCall(data){
    let arr = [];
    data.forEach((element) => arr.push(element))

    return arr;
  }

class ProductsPage extends Component {

    listOfProducts = [];

    componentDidMount(){
      const getAPIInfo = async (url) => {
        const apiRequest = await fetch(url)
        const products = await apiRequest.json()
        let data = await extractDataFromCall(products);
        return data;
      }
      
      getAPIInfo("https://my-json-server.typicode.com/tdmichaelis/json-api/products")
      .then((response) =>  {
        this.listOfProducts = response;
        this.forceUpdate();
    });
      
    }

 render() {
  console.log(this.listOfProducts);
  return (
   <div>
    <h1>Here's the Product Page</h1>
   </div>
  )
 }
}

export default ProductsPage;