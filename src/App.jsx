import './App.css';
import React, { useState, useEffect } from 'react';

// Reusable product card component
function ProductCard({ name, price }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
    </div>
  );
}

function App() {
  // useState for counter
  const [count, setCount] = useState(0);

  // useState for form input
  const [name, setName] = useState('');

  // useState for product list
  const [products, setProducts] = useState([
    { id: 1, name: 'Blazer', price: 4999 },
    { id: 2, name: 'Loafers', price: 2999 },
    { id: 3, name: 'Leather Bag', price: 3499 }
  ]);

  // useEffect for example
  useEffect(() => {
    console.log("useEffect triggered. Current count:", count);
  }, [count]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>React Basics Playground</h1>

      {/* Counter Example */}
      <section>
        <h2>useState Counter</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>+ Increment</button>
        <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>- Decrement</button>
      </section>

      {/* Conditional Rendering */}
      <section>
        <h2>Conditional Rendering</h2>
        <p>{count > 0 ? "Positive Count" : "Zero or Negative"}</p>
      </section>

      {/* Simple Input Handling */}
      <section>
        <h2>Input Example</h2>
        <input 
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Hello, {name || "Guest"}!</p>
      </section>

      {/* Loop Through Products */}
      <section>
        <h2>Product List (Loop using map)</h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {products.map(product => (
            <ProductCard key={product.id} name={product.name} price={product.price} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
