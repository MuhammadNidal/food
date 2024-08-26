import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import FooterKhan from './components/FoodServices/Footer';
import HotelCard from './components/HotelsCard/HotelCard';
import HotelDetail from './components/HotelDetail/HotelDetail';
import FoodService from './components/FoodServices/FoodServices';


import Modal from '././components/Modal/Modal';
import Cart from './components/AddToCart/Cart';

// Import images
import Sheriz from './images/dishes/chicken1.jpeg';
import Hotel2 from './images/dishes/chicken2.jpeg';
import Hotel3 from './images/dishes/Bruscheta.jpeg';
import Hotel4 from './images/dishes/barbeq.jpeg';
import Hotel5 from './images/dishes/baked.jpeg';
import Hotel6 from './images/dishes/airfish.jpg';

// Sample hotels data
const hotels = [
  {
    id: 1,
    name: 'Sheriz',
    description: 'A beautiful hotel with excellent service.',
    images: [Sheriz, Hotel2, Hotel3, Hotel4, Hotel5, Hotel6],
  },
  // Add more hotel objects as needed
];

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);

  const openModal = (dish) => {
    setSelectedDish(dish);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedDish(null);
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const handleCheckout = () => {
    alert('Proceeding to checkout');
  };

  return (
    <Router>
      {/* <CustomNavbar cartCount={cartItems.length} /> */}
      <main>
        <Routes>
          <Route path="/" element={<FoodService />} />
          <Route path="/food/Services/:id" element={<HotelDetail hotels={hotels} />} />

            <Route path="/hotel-card" element={<HotelCard hotel={hotels[0]} onCardClick={openModal} />} />
          <Route
            path="/cart" // Use lowercase for consistency
            element={
              <Cart cartItems={cartItems} onClearCart={clearCart} onCheckout={handleCheckout} />
            }
          />
        </Routes>
      </main>
      <FooterKhan /> {/* Footer should be outside of Routes */}
      {modalOpen && selectedDish && (
        <Modal dish={selectedDish} closeModal={closeModal} onAddToCart={addToCart} />
      )}
    </Router>
  );
};

export default App;
