import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './Components/Header/Header';
import SiteNavbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About-Us/about-us';
import Contact from './pages/Contact-Us/contact-us';

const App = () => {
  return (
    <Router>
      <div>
        <SiteNavbar />
        <Routes>
          {/* Define routes */}
          <Route exact path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;