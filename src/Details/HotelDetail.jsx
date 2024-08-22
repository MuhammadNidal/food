// import React from 'react';
// import { useParams } from 'react-router-dom';
// import ImageSlider from '../components/ImageSlider';
// import './HotelDetail.css';

// const HotelDetail = ({ hotels }) => {
//   const { id } = useParams();
//   const hotel = hotels.find(h => h.id === parseInt(id));

//   if (!hotel) {
//     return <div>Hotel not found</div>;
//   }

//   return (
//     <div>
//       <h1>{hotel.name}</h1>
//       <p>{hotel.description}</p>
//       <ImageSlider images={hotel.images} />
//     </div>
//   );
// };

// export default HotelDetail;
