import React from "react";

function Product(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.img} alt={props.name}></img>
      <h2>{props.description}</h2>
      <h3>{props.price}</h3>
    </div>
  );
}

export default Product;
