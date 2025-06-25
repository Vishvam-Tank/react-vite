import ProductCard from '../components/ProductCard';
import ProductForm from '../components/ProductForm';
import { useState, useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState(() => {
    const stored = localStorage.getItem('products');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const removeProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <>
      <h2>Our Products</h2>
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
      <ProductForm onAdd={addProduct} />
    </>
  );
};

export default Products;
