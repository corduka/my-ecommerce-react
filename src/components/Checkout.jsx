import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cartItems, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckout = () => {
    // Here you would typically send the order data to your backend
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div>
        <h2>Thank you for your purchase!</h2>
        <p>Your order has been placed successfully.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} = ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <h3>Total: ${getTotalPrice()}</h3>
      <button onClick={handleCheckout}>Place Order</button>
    </div>
  );
};

export default Checkout;
