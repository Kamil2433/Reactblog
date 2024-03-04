import React from 'react';
import './App.css'
import { Link } from 'react-router-dom';


const Home = () => {

  const blogs = [
    {
        category:"Travel",
      title: 'Travel with me to dubai',
      author: 'Design Is The Mix Of Emotions',
      date: 'Jesica Koli 02 December 2022',
      readingTime: 'Ⓒ3 Min.',
      content: 'Did you come here for something in particular or just general Riker-bashing? And blowing into',
    },
    {
      category:"Travel",
      title: 'Travel fdsjfjdsilfhdskfjd ',
      author: 'Design Is The Mix Of Emotions',
      date: 'Jesica Koli 02 December 2022',
      readingTime: 'Ⓒ3 Min.',
      content: 'Did you come here for something in particular or just general Riker-bashing? And blowing into',
    },
    {  category:"Travel",
      title: 'I Created A Developer Rap Video - Here\'s What I Learned',
      author: 'Jesica Koli 02 December 2022',
      readingTime: 'Ⓒ3 Min.',
      content: 'Did you come here for something in particular or just general Riker-bashing? And blowing into',
    },
    {  category:"Travel",
      title: 'Design Is The Mix Of Emotions',
      author: 'Jesica Koli 02 December 2022',
      readingTime: 'Ⓒ3 Min.',
      content: 'Did you come here for something in particular or just general Riker-bashing? And blowing into',
    },
  ];

  return (
    <div className="App">
      <main>
        <h2>Recent Blogs</h2>
        <div className="blog-card-container">
          {blogs.map((blog, index) => (
            <Link to="/categories">
            <BlogCard key={index} blog={blog} />
            
            </Link>
          ))}
        </div>
      </main>
  
    </div>
  );
};


const BlogCard = ({ blog }) => {
  return (
    <>  
    <div className="blog-card">

    <img src="https://via.placeholder.com/150" alt="Blog" className="card__left" />
            <p className="blog-category">{blog.category}</p>
    <div className="blog-content">
      <h2>{blog.title}</h2>
      <p>{blog.author}|| {blog.date} || {blog.readingTime} To Read</p>
      <p>{blog.content}</p>
    </div>
  </div>


</>
  );
};

export default Home;