import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header>
      <nav className='nav-bar-container'>
        <h1><a href="/">My Website</a></h1>
        <ul className='nav-list-con'>
          <li><a href="/">Home</a></li>
          <li><a href="/about-us">About</a></li>
          <li><a href="/contact-us">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;