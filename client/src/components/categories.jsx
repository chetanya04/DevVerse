import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../HomePage.module.css';

import webDevelopmentImg from '../assets/WebDevlopment.png';
import uxImg from '../assets/UX.png';
import matrimonialImg from '../assets/matrimonial.png';
import appDevImg from '../assets/appdev.png';
import machineLearningImg from '../assets/machinelearning.png';
import marketingImg from '../assets/marketing.png';
import humanResourceImg from '../assets/HumanResource.png';
import customerServiceImg from '../assets/customerservice.png';

const fallbackImages = {
  'Web Development': webDevelopmentImg,
  'UX/UI Design': uxImg,
  Matrimonial: matrimonialImg,
  'App Development': appDevImg,
  'Machine Learning': machineLearningImg,
  Marketing: marketingImg,
  'Human Resource': humanResourceImg,
  'Customer Service': customerServiceImg,
};

export default function CategoriesSection() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (id) => {
    // Navigate to the category page based on the category ID
    navigate(`/categories/${id}`);
  };

  return (
    <div className={styles["categories-section"]}>
      <h1 className={styles.title} align="center">
        <span className={styles["our"]}>OUR</span> <span className={styles["video"]}>CATEGORIES</span>
      </h1>
      <p className={styles["categories-description"]}>
        At Cling Connect, we bring people together by creating meaningful connections across various domains. Whether you're into web development, design, marketing, or any other field, our platform empowers you to discover like-minded individuals, build relationships, and collaborate on shared interests.
      </p>
      <div className={styles["categories-grid"]}>
        {categories.map((category) => (
          <div
            key={category._id}
            className={styles["category-card"]}
            onClick={() => handleCategoryClick(category._id)}
          >
            <img
              src={category.imageURL || fallbackImages[category.name]}
              alt={category.name}
              width={100}
              height={100}
            />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
      <button className={styles["view-more-button"]}>View More</button>
    </div>
  );
}
