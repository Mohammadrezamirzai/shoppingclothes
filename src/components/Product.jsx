import { useContext } from "react";
import { CartContext } from "../store/CartContext.jsx";

export default function Product({ id, image, title, price, description }) {
  const { addItemToCart, items } = useContext(CartContext);

  // Find the quantity of this product in the cart
  const cartItem = items.find(item => item.id === id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <h3>{title}</h3>
        <p className="product-price">${price}</p>
        <p>{description}</p>
        <div className="product-actions">
          <button onClick={() => addItemToCart(id)}>
            Add to Cart{quantity > 0 ? ` (${quantity})` : ''}
          </button>
        </div>
      </div>
    </article>
  );
}
