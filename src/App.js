import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About-Us/about-us';
import Contact from './pages/Contact-Us/contact-us';


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about-us" component={About} />
          <Route path="/about-us" component={Contact} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
