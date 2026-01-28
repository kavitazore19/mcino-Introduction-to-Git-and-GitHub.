import React from "react";

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  const handleChange = (e) => {
    onUpdateQuantity(item.id, parseInt(e.target.value));
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} width="100" />
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleChange}
        />
        <button onClick={() => onRemove(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
