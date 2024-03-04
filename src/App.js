import React from 'react';
import Header from './components/Header';
// import Hero from './Hero';
import Services from './components/Services';
// import Blogs from './Blogs';
// import AboutUs from './AboutUs';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Errorpage from './components/Errorpage';
import Home from './components/Home';
import Categories from './components/Categories';
import Blog from './components/Blog';


const App = () => {



  return (
    <div className="App">
      <Router >
      <Header />
      <Routes>
        <Route key="home" path='/' element={<Home/>} />
        <Route key="category" path='/categories' element={<Categories/>} />
        <Route  path='*' element={<Errorpage/>} />
        <Route  path='/blog' element={<Blog/>} />

        {/* <Route path="/home/services" component={} /> */}
        {/* Add more routes for other sections */}
        {/* <Route path="/home" component={} /> */}
      </Routes>
      </Router >
      <Footer />
    </div>
  );
};




export default App;