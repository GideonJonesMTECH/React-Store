import { Component } from "react";
import { useParams } from "react-router-dom";

export function ProductDetails(props) {
    
    let { title } = useParams();
    console.log(title)
    

  return (
    <div>
      <p>{props.category}</p>
      <h1>{title}</h1>
      <img
        src={props.img}
        alt={props.title}
        width="500"
        height="600"
      />
      <div>
        <p>{props.description}</p>
      </div>
      <p>{props.rating}</p>
      <p>{props.price}</p> 
    </div> 
   
  );
}
