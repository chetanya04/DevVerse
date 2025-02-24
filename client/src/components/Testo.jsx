
import '../Testo.css'; 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import testo1 from "../assets/testo1.png"
import testo2 from "../assets/testo2.png"


const TestimonialList = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/testimonials`);
        setTestimonials(response.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <div className="testimonial-list-container">
      {testimonials.map((testimonial) => (
        <div className="testimonial-card" key={testimonial._id}>
          <div className="testimonial-avatar">
            <img src={testo1} alt={testimonial.name} className="rounded-full" />
          </div>
          <p className="testimonial-quote">"{testimonial.quote}"</p>
          <div className="testimonial-info">
          <div className="testimonial-name-position">
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <span className="testimonial-position">{testimonial.position}</span>
            </div>
            <div className="testimonial-rating">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialList;
