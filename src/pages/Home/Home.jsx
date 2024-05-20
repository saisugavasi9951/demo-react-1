import React from 'react';
import './home.css';
import HomeCarousel from '../../Components/Carousel/Carousel';
import Card from '../../Components/Card/Card';
import AllCollapseAccordion from '../../Components/Accordion/Accordion';
import Tabs from '../../Components/Tabs/Tabs';

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
      <Tabs />
      <AllCollapseAccordion />
    </div>
  );
}

export default Home;