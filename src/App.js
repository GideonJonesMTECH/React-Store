
import './App.css';
import ProductsPage from "./ProductsPage"
import { Component } from 'react';



/*function getAPIInfo() {
  let apiURL = "https://my-json-server.typicode.com/tdmichaelis/json-api/products";
  let storeApi = new XMLHttpRequest();
  storeApi.open('GET', apiURL, true);
  storeApi.send();
  return(
    storeApi.onload = function () {
      let storeObj = JSON.parse(storeApi.responseText);
      return storeObj;
    }
  )
} */




//"https://my-json-server.typicode.com/tdmichaelis/json-api/products"
class App extends Component{
  
  
  

  render () {
    return(<ProductsPage/>)
  }
}

export default App;
