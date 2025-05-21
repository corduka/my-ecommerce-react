import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <Link to={`/item/${product.id}`}>View Details</Link>
    </div>
  );
};

export default Item;
