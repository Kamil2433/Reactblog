import React from "react";
import "./blog.css";
import { useLocation } from 'react-router-dom';

const Blog = () => {

  const getCategoryFromUrl = () => {
  
    return category;
  };

    const PrevArrow = () => (
        <svg
          width="10"
          height="18"
          viewBox="0 0 10 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.5 1L1 9L9.5 17" stroke="blue" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    
      const NextArrow = () => (
        <svg
          width="10"
          height="18"
          viewBox="0 0 10 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.5 1L9 9L0.5 17" stroke="blue" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
      const location = useLocation();
      const category = new URLSearchParams(location.search).get('category');

  return (
    <div className="blog-wrapper">
      <div className="blog-container">
        <div className="blog-entry">
        <div className="blog-category">{category || 'Technology'}</div>

          <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
          <div className="blog-author-container">
            <div className="blog-author">
              <img src="https://via.placeholder.com/50x50.png?text=Author+Icon" alt="Author" className="blog-author-img" />
              <div className="blog-author-info">
                <h5 className="blog-author-name">kams, March 20, 2024</h5>
                
              </div>
            </div>
          </div>
          <p>

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
            repudiandae magni, quos fuga earum nemo totam rerum autem repellat
            nihil incidunt obcaecati exercitationem repellendus sunt
            necessitatibus aliquid maxime accusamus reprehenderit. Officiis,
            animi dolores fugiat commodi cumque vel dicta rem excepturi unde
            laborum vitae hic nulla inventore nihil ullam at fuga aut. Quidem
            est autem maiores! Necessitatibus numquam nam ducimus voluptas
            maxime laborum. Exercitationem ipsum fuga, eveniet quisquam natus
            unde obcaecati placeat, quos saepe at eligendi autem nihil ipsam
            animi quibusdam voluptates tenetur esse accusantium. Totam
            consectetur sed vitae. Voluptatum deleniti dolorem culpa voluptatem
            esse ducimus iusto necessitatibus blanditiis facilis optio.
          </p>
          <img
            src="https://via.placeholder.com/350x200.png?text=Placeholder+Image"
            alt="Placeholder"
          />
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            minima!
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            optio culpa explicabo, architecto eum dicta placeat officia
            molestiae maxime rerum at, sunt illum aut ullam expedita iure nihil
            totam? Earum enim vero sequi autem eius. Facilis provident,
            aspernatur, ab, reprehenderit itaque aliquam ipsa totam esse natus
            earum illum dicta illo!
          </p>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            minima!
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            optio culpa explicabo, architecto eum dicta placeat officia
            molestiae maxime rerum at, sunt illum aut ullam expedita iure nihil
            totam? Earum enim vero sequi autem eius. Facilis provident,
            aspernatur, ab, reprehenderit itaque aliquam ipsa totam esse natus
            earum illum dicta illo!
          </p>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            minima!
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            optio culpa explicabo, architecto eum dicta placeat officia
            molestiae maxime rerum at, sunt illum aut ullam expedita iure nihil
            totam? Earum enim vero sequi autem eius. Facilis provident,
            aspernatur, ab, reprehenderit itaque aliquam ipsa totam esse natus
            earum illum dicta illo! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Molestias dolore corporis saepe cumque eos. Dicta
            ullam inventore quod esse eum.
          </p>
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="YouTube video"
              allowFullScreen
            />
          </div>
        </div>
        
      </div>
      <div className="pagination-container">
      <div className="pagination-controls">
        <button className="pagination-btn"><PrevArrow/></button>
        <button className="pagination-btn active">1</button>
        <button className="pagination-btn">2</button>
        <button className="pagination-btn">3</button>
        <button className="pagination-btn">4</button>
        <button className="pagination-btn">5</button>
        <button className="pagination-btn">6</button>
        <button className="pagination-btn">7</button>
        <button className="pagination-btn">8</button>
        <button className="pagination-btn"><NextArrow/></button>
      </div>
      
    
   
      </div>
      
    </div>
  );
};

export default Blog;
