import React from 'react';
import blogStyles from "../blogcard.module.css";


const BlogCard = ({ title, description, image }) => {
    return (
      <div className={blogStyles.blogCard}>
        <img src={image} alt={title} />
        <div className={blogStyles.blogCardContent}>
          <h5>{title}</h5>
          <p>{description}</p>
          <button>
            <a href={description} target="_blank" rel="noopener noreferrer" className={blogStyles.alink}>More</a>
            <span className={blogStyles.arrow}>→</span>
          </button>
        </div>
      </div>
    );
  };

  export default BlogCard