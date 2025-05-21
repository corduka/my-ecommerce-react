import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeItemFromCart, clearCart, getTotalPrice } =
    useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div>
        <h2>Your cart is empty</h2>
        <Link to="/">Go back to products</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} - Quantity: {item.quantity} - Price: $
            {item.price * item.quantity}
          </p>
          <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${getTotalPrice()}</h3>
      <button onClick={clearCart}>Clear Cart</button>
      <Link to="/checkout">Proceed to Checkout</Link>
    </div>
  );
};

export default Cart;
