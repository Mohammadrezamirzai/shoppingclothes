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
          <button onClick={handleOpenCartClick} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} aria-label="Open cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.16 14.26l.03-.12L7.9 12h8.45c.75 0 1.41-.41 1.75-1.03l3.24-5.88A1 1 0 0 0 20.5 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7.42c-.14 0-.25-.11-.26-.25z"/>
            </svg>
            <span style={{ fontWeight: 600 }}>{cartQuantity}</span>
          </button>
        </p>
      </header>
    </>
  );
}
