import React from 'react';
import './header.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from './Services'
import Errorpage from './Errorpage';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>
      <img src='/logo.png' alt="Angantraya Birdseye logo" /> {/* Add the logo image */}
      <nav>
        <ul>
          <li><Link to='/'>HOME</Link></li>
          <li>DESTINATIONS</li>
          <li><Link to='/categories'>
          CATEGORIES
          </Link></li>
          <li>OUR BLOGS</li>
          <li>CONTACT US</li>
        </ul>
      </nav>
  
    </header>
  );
};

export default Header;