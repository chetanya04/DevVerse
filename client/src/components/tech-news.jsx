import React, { useEffect, useState } from 'react';
import styles from "../HomePage.module.css";
import blogStyles from "../blogcard.module.css";
import axios from 'axios'
import BlogCard from "./BlogCard"



const BlogSection = () => {

  const [blogs,setBlogs]= useState([])
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);
  
  useEffect(()=>{
    const fetchBlogs = async()=>{
      try {
        const response = await axios.get('http://localhost:5000/api/blogs')
          setBlogs(response.data),
          setLoading(false)

      }catch(error) {
        setError(error.message)
        setLoading(false)
      }
    }
    fetchBlogs();
  },[])

  if (loading) return <p>Loading...</p>
  if(error) return <p>Error: {error}</p>


  return (
    <div className={blogStyles.blogSection}>
      <h2 className={styles.our}>OUR <span className={styles.video}>BLOGS</span></h2>
      <div className={blogStyles.blogCardsContainer}>
        {blogs.map((blog) => (
          <BlogCard
            key={blog._id}
            title={blog.title}
            description={blog.blog_url}
            image={blog.thumbnail}
          />
        ))}
        {/* {blogs.map((blog) => (
          <BlogCard
            key={blog._id}
            title={blog.title}
            description={blog.blog_url}
            image={blog.thumbnail}
          />
        ))}
        {blogs.map((blog) => (
          <BlogCard
            key={blog._id}
            description={blog.blog_url}
            image={blog.thumbnail}
          />
        ))}
        {blogs.map((blog) => (
          <BlogCard
            key={blog._id}
            description={blog.blog_url}
            image={blog.thumbnail}
          />
        ))} */}
      </div>
    </div>
  );
};

export default BlogSection;