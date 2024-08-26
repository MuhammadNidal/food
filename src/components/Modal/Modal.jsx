// src/components/Modal.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice'; // Correct import of addToCart
import { useNavigate } from 'react-router-dom';
import './Modal.css';

const Modal = ({ dish, closeModal }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariation, setSelectedVariation] = useState('');
  const [selectedAddons, setSelectedAddons] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const variations = [
    { label: 'Small', price: 0 },
    { label: 'Medium', price: 50 },
    { label: 'Large', price: 100 },
  ];

  const addons = [
    { label: 'Extra Cheese', price: 20 },
    { label: 'Extra Sauce', price: 15 },
    { label: 'Extra Patty', price: 30 },
  ];

  const handleQuantityChange = (delta) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + delta));
  };

  const handleVariationChange = (label) => {
    setSelectedVariation(label);
  };

  const handleAddonChange = (label) => {
    setSelectedAddons((prevSelected) =>
      prevSelected.includes(label)
        ? prevSelected.filter((addon) => addon !== label)
        : [...prevSelected, label]
    );
  };

  const calculateTotalPrice = () => {
    const variationPrice = variations.find((v) => v.label === selectedVariation)?.price || 0;
    const addonsPrice = selectedAddons.reduce(
      (total, addon) => total + (addons.find((a) => a.label === addon)?.price || 0),
      0
    );
    return (dish.price + variationPrice + addonsPrice) * quantity;
  };

  const handleAddToCart = () => {
    const cartItem = {
      ...dish,
      quantity,
      variation: selectedVariation,
      addons: selectedAddons,
      totalPrice: calculateTotalPrice(),
    };
    dispatch(addToCart(cartItem)); // Correct usage of addToCart
    closeModal();
    navigate('/cart');
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
          <div className="checkbox-group">
            <h4>Variation:</h4>
            {variations.map(({ label, price }) => (
              <div key={label} className="checkbox-item">
                <input
                  type="radio"
                  id={label}
                  checked={selectedVariation === label}
                  onChange={() => handleVariationChange(label)}
                />
                <label htmlFor={label}>
                  {label} (+Rs. {price})
                </label>
              </div>
            ))}
          </div>
          <div className="checkbox-group">
            <h4>Add-ons:</h4>
            {addons.map(({ label, price }) => (
              <div key={label} className="checkbox-item">
                <input
                  type="checkbox"
                  id={label}
                  checked={selectedAddons.includes(label)}
                  onChange={() => handleAddonChange(label)}
                />
                <label htmlFor={label}>
                  {label} (+Rs. {price})
                </label>
              </div>
            ))}
          </div>
          <div className="quantity-control">
            <button onClick={() => handleQuantityChange(-1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange(1)}>+</button>
          </div>
          <div className="modal-footer">
            <span className="total-price">Rs. {calculateTotalPrice().toFixed(2)}</span>
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
