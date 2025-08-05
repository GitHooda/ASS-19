import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  return (
    <div className="App">
      <h1>Add to Cart Example</h1>
      <ProductList onAddToCart={handleAddToCart} />
      <Cart items={cartItems} onRemove={handleRemoveFromCart} />
    </div>
  );
}

export default App;
