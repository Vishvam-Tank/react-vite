import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ name, price, id }) => {
  const { addToCart } = useContext(CartContext);

  const product = { name, price, id };

  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
