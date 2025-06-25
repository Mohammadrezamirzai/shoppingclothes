import { useState, useContext } from "react";

import CartModal from "./CartModal.jsx";

import { CartContext } from "../store/CartContext.jsx";

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items } = useContext(CartContext);
  const cartQuantity = items.length;

  function handleOpenCartClick() {
    setIsCartOpen(true);
  }

  function handleCloseCart() {
    setIsCartOpen(false);
  }

  let modalActions = <button onClick={handleCloseCart}>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button onClick={handleCloseCart}>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal
        isOpen={isCartOpen}
        title="Your Cart"
        actions={modalActions}
      />
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Clothes Shopping</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
