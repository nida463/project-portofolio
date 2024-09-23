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
            <p className="testimonial-text">
              "This is a great app! It helped me organize my finances more efficiently."
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
