import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ dish, closeModal, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedAddon, setSelectedAddon] = useState('');
  const [selectedVariation, setSelectedVariation] = useState('');

  const handleQuantityChange = (delta) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + delta));
  };

  const handleAddToCart = () => {
    // onAddToCart(quantity);
    closeModal();
  };

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={closeModal}>&times;</span>
        <div className="modal-left">
          <div
            className="modal-image"
            style={{ backgroundImage: `url(${dish.image})` }}
          ></div>
        </div>
        <div className="modal-right">
          <h2>{dish.name}</h2>
          <div className="dropdown">
            <label htmlFor="variation">Variation:</label>
            <select
              id="variation"
              value={selectedVariation}
              onChange={(e) => setSelectedVariation(e.target.value)}
              className="dropdown-select"
            >
              <option value="">Select Variation</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          <div className="dropdown">
            <label htmlFor="addon">Add-on:</label>
            <select
              id="addon"
              value={selectedAddon}
              onChange={(e) => setSelectedAddon(e.target.value)}
              className="dropdown-select"
            >
              <option value="">Select Add-on</option>
              <option value="extra-cheese">Extra Cheese</option>
              <option value="extra-sauce">Extra Sauce</option>
              <option value="extra-patty">Extra Patty</option>
            </select>
          </div>
          <div className="quantity-control">
            <button onClick={() => handleQuantityChange(-1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange(1)}>+</button>
          </div>
          <div className="modal-footer">
            <span className="total-price">Rs. {(dish.price * quantity).toFixed(2)}</span>
            <button className="add-to-cart-button" onClick={handleAddToCart}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
