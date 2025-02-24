 import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../HomePage.module.css';

export default function CategoryPage() {
  const { id } = useParams(); // Get category ID from URL
  const navigate = useNavigate();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/categories/${id}`);
        setCategory(response.data);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    fetchCategory();
  }, [id]);

  if (!category) return <p>Loading...</p>;

  return (
    <div className={styles.categoryContainer}>
      <h1>{category.name}</h1>
      <img src={category.imageURL} alt={category.name} width={150} height={150} />
      <p>{category.description}</p>
      <button onClick={() => navigate(-1)} className={styles.backButton}>Back</button>
    </div>
  );
}
