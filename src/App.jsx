import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import ProductCard from './components/ProductCard';
import ProductForm from './components/ProductForm';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'T-shirt', price: 799 },
    { id: 2, name: 'Watch', price: 4999 },
    { id: 3, name: 'Bag', price: 1999 },
  ]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const removeProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="App">
      <Header title="React Component Practice" />

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

      <ProductForm onAdd={addProduct} />
    </div>
  );
}

export default App;
