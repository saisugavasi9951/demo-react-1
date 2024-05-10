import React from 'react';
import './home.css';
import HomeCarousel from '../../Components/Carousel/Carousel';
import Card from '../../Components/Card/Card';
import AllCollapseAccordion from '../../Components/Accordion/Accordion';

const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <div className='card-container'>
        <Card />
        <Card />
        <Card />
      </div>
      <AllCollapseAccordion />
    </div>
  );
}

export default Home;