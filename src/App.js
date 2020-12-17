import logo from './logo.svg';
import './App.css';
import ProductsPage from "./ProductsPage"
import { render } from 'react-dom';
import { Component } from 'react';
import { func } from 'prop-types';


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
const getAPIInfo = fetch(
  "https://my-json-server.typicode.com/tdmichaelis/json-api/products"
).then((response) => response.json());



class App extends Component{
  render () {
    let data = getAPIInfo.then((response) => response);
    return(<ProductsPage data={data}/>)
  }
}

export default App;
