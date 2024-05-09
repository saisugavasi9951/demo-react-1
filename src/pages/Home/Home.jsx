import React from 'react';
import HomeCarousel from '../../Components/Carousel/Carousel';
import Card from '../../Components/Card/Card';
import './home.css';

const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <div className='card-container'>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;