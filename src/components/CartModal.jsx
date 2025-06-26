import { useRef, useEffect } from "react";

import { createPortal } from "react-dom";
import Cart from "./Cart.jsx";

export default function CartModal({ title, actions, isOpen }) {
  const dialog = useRef();

  useEffect(() => {
    if (isOpen && dialog.current) {
      dialog.current.showModal();
    }
    // No need to call close() here, since the dialog will be removed from the DOM when isOpen is false
    // Cleanup: if dialog is open and component unmounts, close it
    return () => {
      if (dialog.current && dialog.current.open) {
        dialog.current.close();
      }
    };
  }, [isOpen]);

  // Only render the modal when isOpen is true
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <dialog id="modal" ref={dialog}>
      <h2>{title}</h2>
      <Cart />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    document.body
  );
}
