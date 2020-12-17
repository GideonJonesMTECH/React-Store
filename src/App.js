import logo from './logo.svg';
import './App.css';

let apiURL = "https://my-json-server.typicode.com/tdmichaelis/json-api/products";
let storeApi = new XMLHttpRequest();
storeApi.open('GET', apiURL, true);
storeApi.send();
storeApi.onload = function () {
 if (storeApi.status === 200) {
  let storeApi = JSON.parse(storeApi.responseText).courses;
  setStartup(storeApi);
 } else {
  return;
 }
}

function setStartup(storeApi) {
  
}


function App() {
  return (
    <div> <h1>E-Commerce Store</h1></div>
  );
}

export default App;
