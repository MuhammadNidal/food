import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HotelCard from './components/HotelCard';
import HotelDetail from './pages/HotelDetail';
import ContactPage from './pages/ContactPage';
import FoodPage from './pages/FoodPage';
import AboutUs from './pages/AboutUs';

import CustomNavbar from './components/Navbar'; // Ensure this is the correct path
import FooterKhan from './components/Footer'; // Correct import

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
    images: [Sheriz, Hotel2, Hotel3, Hotel4, Hotel5, Hotel6] // Add other images as needed
  },
  // Add more hotel objects as needed
];

function App() {
  return (
    <Router>
      <CustomNavbar />
      <main>
        <Routes>
          <Route path="/" element={<FoodPage />} />
          <Route path="/food/Services/:id" element={<HotelDetail hotels={hotels} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutUs />} />
          
          <Route path="/hotel-card" element={<HotelCard hotel={hotels[0]} />} />
          {/* Define more routes as needed */}
        </Routes>
      </main>
      <FooterKhan /> {/* Footer should be outside of Routes */}
    </Router>
  );
}

export default App;
