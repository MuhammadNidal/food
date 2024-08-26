import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, increaseQuantity, decreaseQuantity, clearCart } from '../../redux/cartSlice';
import './cart.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (index) => {
    dispatch(removeItem(index));
  };

  const handleIncreaseQuantity = (index) => {
    dispatch(increaseQuantity(index));
  };

  const handleDecreaseQuantity = (index) => {
    dispatch(decreaseQuantity(index));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.totalPrice, 0);

  return (
    <div className="cart">
      <div className="cart-header">
        <h2>Your Cart</h2>
        {cartItems.length > 0 && (
          <button onClick={handleClearCart} className="clear-cart-button">Clear Cart</button>
        )}
      </div>
      <ul className="cart-list">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>Variation: {item.variation}</p>
                <p>Add-ons: {item.addons.join(', ')}</p>
                <div className="quantity-controls">
                  <button onClick={() => handleDecreaseQuantity(index)}>-</button>
                  <span className="quantity">{item.quantity}</span>
                  <button onClick={() => handleIncreaseQuantity(index)}>+</button>
                </div>
                <p className="item-total">Total: Rs. {item.totalPrice.toFixed(2)}</p>
                <button onClick={() => handleRemoveItem(index)} className="delete-button">Remove</button>
              </div>
            </li>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </ul>
      {cartItems.length > 0 && (
        <div className="cart-footer">
          <p className="total-price">Total Price: Rs. {totalPrice.toFixed(2)}</p>
          <button className="checkout-button">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
