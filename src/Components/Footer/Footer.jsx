import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer-container container-fluid'>
      <div className='footer-content container'>
        <div className='footer-section'>
          <h4>About Us</h4>
          <p>We are a team of passionate developers.</p>
        </div>
        <div className='footer-section'>
          <h4>Contact</h4>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className='footer-section'>
          <h4>Follow Us</h4>
          <div className='social-icons'>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>Facebook</a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>Twitter</a>
            <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;