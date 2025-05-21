import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  return <Link to="/cart">🛒 Cart ({getTotalQuantity()})</Link>;
};

export default CartWidget;
