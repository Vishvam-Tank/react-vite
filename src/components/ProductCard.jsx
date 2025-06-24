function ProductCard({ name, price, onRemove }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

export default ProductCard;
