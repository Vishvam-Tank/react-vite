import { useState } from 'react';

function ProductForm({ onAdd }) {
  const [newProduct, setNewProduct] = useState('');
  const [newPrice, setNewPrice] = useState('');

  const handleAdd = () => {
    if (newProduct.trim() && newPrice) {
      onAdd({ name: newProduct, price: parseInt(newPrice), id: Date.now() });
      setNewProduct('');
      setNewPrice('');
    }
  };

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Product name"
        value={newProduct}
        onChange={(e) => setNewProduct(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={newPrice}
        onChange={(e) => setNewPrice(e.target.value)}
      />
      <button onClick={handleAdd}>Add Product</button>
    </div>
  );
}

export default ProductForm;
