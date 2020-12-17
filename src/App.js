import logo from './logo.svg';
import './App.css';
import ProductsPage from "./ProductsPage"
import { render } from 'react-dom';
import { Component } from 'react';

let apiURL = "https://my-json-server.typicode.com/tdmichaelis/json-api/products";
let storeApi = new XMLHttpRequest();
storeApi.open('GET', apiURL, true);
storeApi.send();
storeApi.onload = function () {
 if (storeApi.status === 200) {
  let storeObj = JSON.parse(storeApi.responseText);
  setStartup(storeObj);
 } else {
  return;
 }
}


function setStartup(storeObj) {
  console.log(storeObj);
  Full.render(<ProductsPage/>)
}

class Full extends Component {
  render(data) {
    return(
      data
    )
  }
}



function App(){
  return (
    <Full/>
  );
}

export default App;
