import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Brief = () => {
  const { cartItems, getTotalPrice } = useContext(CartContext);

  return (
    <div>
      <h2>Order Summary</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} = ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <h3>Total: ${getTotalPrice()}</h3>
    </div>
  );
};

export default Brief;
