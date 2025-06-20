import { useState } from 'react';
import './App.css';

// Header component (using props)
function Header({ title }) {
  return <h1 style={{ color: '#2c3e50' }}>{title}</h1>;
}

// Reusable Product Card Component
function ProductCard({ name, price, onRemove }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

function App() {
  // useState basics
  const [products, setProducts] = useState([
    { id: 1, name: 'T-shirt', price: 799 },
    { id: 2, name: 'Watch', price: 4999 },
    { id: 3, name: 'Bag', price: 1999 },
  ]);

  const [newProduct, setNewProduct] = useState('');
  const [newPrice, setNewPrice] = useState('');

  // Add new product to list
  const addProduct = () => {
    if (newProduct.trim() && newPrice) {
      const id = Date.now();
      setProducts([...products, { id, name: newProduct, price: parseInt(newPrice) }]);
      setNewProduct('');
      setNewPrice('');
    }
  };

  // Remove product
  const removeProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="App">
      <Header title="🛒 React Practice App" />

      {/* Conditional Rendering */}
      {products.length === 0 ? (
        <p>No products left.</p>
      ) : (
        <div className="product-grid">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              name={p.name}
              price={p.price}
              onRemove={() => removeProduct(p.id)}
            />
          ))}
        </div>
      )}

      {/* Input Form */}
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
        <button onClick={addProduct}>Add Product</button>
      </div>
    </div>
  );
}

export default App;
