import React from 'react';
import './home.css';
import HomeCarousel from '../../Components/Carousel/Carousel';
import Card from '../../Components/Card/Card';
import AllCollapseAccordion from '../../Components/Accordion/Accordion';

const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <div className='container-fluid'>
        <div className='container card-container'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <AllCollapseAccordion />
    </div>
  );
}

export default Home;