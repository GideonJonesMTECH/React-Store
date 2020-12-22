import React from "react";
import { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Root } from "./components/Root";
import { Provider } from "react-redux";

import { reducer } from "./Store/Reducer";
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'

import "./index.css"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const extractDataFromCall = (data) => {
  let arr = [];
  data.forEach((element) => arr.push(element));
  return arr;
 }
 
 const getAPIInfo = async (url) => {
  const apiRequest = await fetch(url);
  const products = await apiRequest.json();
  let data = await extractDataFromCall(products);
  return data;
 };

const fetchPostsSuccess = posts => ({
  type: 'FETCH_POSTS_SUCCESS',
  products: posts 
})

export const fetchPosts =  () => {
  return async dispatch => {
      try {
          let apiCall = await getAPIInfo(
            "https://my-json-server.typicode.com/tdmichaelis/json-api/products"
           )
          dispatch(fetchPostsSuccess(apiCall)) 
      }
      catch(e){
          console.log(e)
      }
  }
}

store.dispatch(fetchPosts()) 

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <div className="ui menu">
              <Root />
            </div>
          </div>
        </Router>
      </Provider>

    );
  }
}

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
