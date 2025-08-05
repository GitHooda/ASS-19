import React from 'react';

const Cart = ({ items, onRemove }) => {
  return (
    <div>
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        items.map((item, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            {item.name} - ₹{item.price}
            <button onClick={() => onRemove(index)} style={{ marginLeft: '10px' }}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
