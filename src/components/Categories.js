import React from 'react';
import { Link } from 'react-router-dom';
import './categories.css';


//box color- #E8F3F3
//box when selected- #25BCD1 
//icon- #00AAA1



const Categories = () => {
  return (
    <div className="world-map-container">
      <img src="word.jpg" alt="World Map" className="world-map" />
      <div className="world-map-boxes">
        <Link to="/blog?category=Environment" className="world-map-box environment">
        <i className="fas fa-tree fa-2x" size="2xl" ></i>

          <h4>Enviroment & Nature</h4>
        </Link>
        <Link to="/blog?category=Food" className="world-map-box food">
        <i className="fas fa-utensils fa-2x" size="2xl" ></i>

          <h4>Food</h4>
        </Link>
        <Link to="/blog?category=Technology" className="world-map-box technology">
        <i className="fas fa-laptop fa-2x"  size="2xl" ></i>

          <h4>Technology</h4>
        </Link>
        <Link to="/blog?category=Topics" className="world-map-box topics">
        <i className="fas fa-book fa-2x"  size="2xl" ></i>
          <h4>Topics</h4>
        </Link>
        <Link to="/blog?category=Lifestyle" className="world-map-box lifestyle">
        <i className="fas fa-camera fa-2x" size="2xl" ></i>
          <h4>Lifestyle & Fashion</h4>
        </Link>
        <Link to="/blog?category=Healthcare" className="world-map-box healthcare">
        <i className="fas fa-user-md fa-2x" size="2xl" ></i>
          <h4>Healthcare</h4>
        </Link>
        <Link to="/blog?category=Photography" className="world-map-box photography">
        <i className="fas fa-plane fa-2x"  size="2xl" ></i>
          <h4>Photography</h4>
        </Link>
      </div>
    </div>
  );
};

export default Categories;