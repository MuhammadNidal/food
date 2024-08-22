import React, { useState } from 'react';
import Modal from './Modal';
import './DishCard.css';

const DishCard = ({ dish }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="dish-card">
      <div
        className="dish-card-image"
        style={{ backgroundImage: `url(${dish.image})` }}></div>
      <div className="dish-card-content">
        <h3>{dish.name}</h3>
        <p>Description :{dish.description}</p>
        <p>Price: {dish.price}</p> {/* Corrected property to `dish.price` */}
        <button onClick={openModal}>Add to Cart</button>
      </div>
      {isModalOpen && <Modal dish={dish} closeModal={closeModal} />}
    </div>
  );
};

export default DishCard;
