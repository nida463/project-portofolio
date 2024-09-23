import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <h2 className="testimonial-title">Testimonial</h2>
      <div className="testimonial-cards">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="testimonial-card">
            <img src="img/testimonial.png" alt="Testimonial" className="testimonial-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
