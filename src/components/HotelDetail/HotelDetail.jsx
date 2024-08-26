import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import ImageSlider from '../Details/ImageSlider';
import DishCard from '../DishCart/DishCard';
import './HotelDetail.css';
// import Button from '@mui/material/Button';

// Import images at the top
import Fish1 from '../../images/dishes/fish1.jpg';
import Fish3 from '../../images/dishes/fish3.png';
import Chicken1 from '../../images/dishes/chicken1.jpeg';
import Chicken2 from '../../images/dishes/chicken2.jpeg';
import Kebab1 from '../../images/dishes/springRolls.jpeg'; // Corrected import
import Kebab2 from '../../images/dishes/kebabroll.jpeg'; // Corrected import
import Rice1 from '../../images/dishes/Pulao.jpg'; // Corrected import
import Rice2 from '../../images/dishes/friedrice.jpg'; // Corrected import
import BeefSteak from '../../images/dishes/meet1.jpg'; // Corrected import
import LambChops from '../../images/dishes/meet2.jpeg'; // Corrected import
import Bruschetta1 from '../../images/dishes/Bruscheta.jpeg'; // Corrected import
import Mushroom2 from '../../images/dishes/mashroom.jpeg'; // Corrected import
import SpringRolls3 from '../../images/dishes/springRolls.jpeg'; // Corrected import
import ChickenSatay4 from '../../images/dishes/chikensatay.jpeg'; 
import Fish4 from '../../images/dishes/baked.jpeg'; // Corrected import
import Fish5 from '../../images/dishes/tacos.jpeg'; // Corrected import
import Chicken3 from '../../images/dishes/saladRost.jpeg'; // Corrected import
import Chicken4 from '../../images/dishes/airfish.jpg'; // Corrected import
import  Kebab3 from '../../images/dishes/shwarma.jpeg'; // Corrected import
import Kebab4 from '../../images/dishes/seekhKebabs.jpg'; // Corrected import
import Rice3 from '../../images/dishes/saffron.jpeg'; // Corrected import
import Rice4 from '../../images/dishes/lemonrice.jpeg';
import BeefSteak1 from '../../images/dishes/pork.jpg'; // Corrected import
import LambChops1 from '../../images/dishes/meet1.jpg';

const HotelDetail = ({ hotels }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hotel = hotels.find(hotel => hotel.id === parseInt(id));

  if (!hotel) {
    navigate('/404'); // Handle non-existent hotel
    return null;
  }

  const [selectedCategory, setSelectedCategory] = useState('fish');

  const dishes = {
    fish: [
      { id: 1, name: 'Grilled Salmon', image: Fish1, description: 'A healthy and flavorful grilled salmon, seasoned to perfection.', price: 1200 },
      { id: 2, name: 'Fish Curry', image: Fish3, description: 'A spicy and tangy fish curry, cooked in traditional spices.', price: 800 },
      { id: 3, name: 'Baked Cod', image: Fish4, description: 'Tender cod baked with lemon and herbs.', price: 1000 },
      { id: 4, name: 'Fish Tacos', image: Fish5, description: 'Crispy fish tacos topped with fresh salsa and avocado.', price: 600 },
    ],
    chicken: [
      { id: 5, name: 'Chicken Biryani', image: Chicken1, description: 'Aromatic basmati rice layered with tender chicken and exotic spices.', price: 500 },
      { id: 6, name: 'Grilled Chicken', image: Chicken2, description: 'Juicy grilled chicken, marinated with herbs and spices.', price: 700 },
      { id: 7, name: 'Chicken Alfredo', image: Chicken3, description: 'Creamy Alfredo sauce with tender chicken over pasta.', price: 900 },
      { id: 8, name: 'Chicken Caesar Salad', image: Chicken4, description: 'Crispy chicken strips on a bed of romaine lettuce with Caesar dressing.', price: 600 },
    ],
    kebabs: [
      { id: 9, name: 'Kebab Roll', image: Kebab1, description: 'Delicious kebabs rolled in soft naan bread, topped with fresh veggies.', price: 200 },
      { id: 10, name: 'Seekh Kebabs', image: Kebab2, description: 'Succulent seekh kebabs made from minced meat, seasoned with spices.', price: 300 },
      { id: 11, name: 'Shish Kebabs', image: Kebab3, description: 'Grilled skewers of marinated meat and vegetables.', price: 400 },
      { id: 12, name: 'Chicken Shawarma', image: Kebab4, description: 'Tender chicken shawarma served with garlic sauce and pita bread.', price: 250 },
    ],
    rice: [
      { id: 13, name: 'Pulao', image: Rice1, description: 'Aromatic rice cooked with meat, vegetables, and a blend of spices.', price: 350 },
      { id: 14, name: 'Fried Rice', image: Rice2, description: 'Stir-fried rice with vegetables, eggs, and savory soy sauce.', price: 300 },
      { id: 15, name: 'Saffron Rice', image: Rice3, description: 'Fragrant rice infused with saffron and cooked to perfection.', price: 400 },
      { id: 16, name: 'Lemon Rice', image: Rice4, description: 'Rice cooked with a tangy lemon seasoning and garnished with peanuts.', price: 350 },
    ],
    meat: [
      { id: 17, name: 'Beef Steak', image: BeefSteak, description: 'Tender beef steak cooked to your liking, served with sides.', price: 1500 },
      { id: 18, name: 'Lamb Chops', image: LambChops, description: 'Juicy lamb chops grilled to perfection, with a side of mint sauce.', price: 1300 },
      { id: 19, name: 'BBQ Ribs', image: BeefSteak1, description: 'Tender ribs smothered in a smoky BBQ sauce.', price: 1200 },
      { id: 20, name: 'Pork Belly', image: LambChops1, description: 'Crispy and succulent pork belly with a savory glaze.', price: 1100 },
    ],
    starters: [
      { id: 21, name: 'Bruschetta', image: Bruschetta1, description: 'Toasted bread topped with a mixture of tomatoes, basil, and garlic.', price: 250 },
      { id: 22, name: 'Spring Rolls', image: SpringRolls3, description: 'Crispy rolls filled with fresh vegetables and served with a sweet and sour dipping sauce.', price: 200 },
      { id: 23, name: 'Stuffed Mushrooms', image: Mushroom2, description: 'Mushrooms stuffed with a mixture of cheese, herbs, and breadcrumbs.', price: 350 },
      { id: 24, name: 'Chicken Satay', image: ChickenSatay4, description: 'Grilled chicken skewers served with a rich peanut sauce.', price: 300 },
    ]
  };
  

  return (
    <div className="hotel-detail">
      <h1 style={{ color: 'green', textAlign: 'center', fontSize: '2.5rem', marginBottom: '10px' }}>
        {hotel.name}
      </h1>
      <p style={{ color: 'green', textAlign: 'center', fontSize: '1.2rem', marginTop: '0' }}>
        {hotel.description}
      </p>
      {/* <ImageSlider images={hotel.images} /> */}
      <div className="category-buttons">
        <button  onClick={() => setSelectedCategory('fish')}>Fish</button>
        <button variant="contained" onClick={() => setSelectedCategory('chicken')}>Chicken</button>
        <button variant="contained" onClick={() => setSelectedCategory('kebabs')}>Kebabs</button>
        <button variant="contained" onClick={() => setSelectedCategory('rice')}>Rice</button>
        <button variant="contained" onClick={() => setSelectedCategory('meat')}>Meat</button>
        <button variant="contained" onClick={() => setSelectedCategory('starters')}>Starters</button>
      </div>
      <div className="dishes">
        {dishes[selectedCategory] && dishes[selectedCategory].map(dish => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  );
};

export default HotelDetail;
