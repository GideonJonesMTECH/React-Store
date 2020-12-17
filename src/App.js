import logo from './logo.svg';
import './App.css';

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
  // <ProductsPage data = {storeObj} />
  console.log(storeObj)
}




function App() {
  return (
    <div>
      <h1>
        E-Commerce Store
      </h1>
    </div>
  );
}

export default App;
