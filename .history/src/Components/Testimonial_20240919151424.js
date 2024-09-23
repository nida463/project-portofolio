import React from 'react';
import './Testimonial.css';

// Testimonial data
const testimonials = [
  {
    text: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    name: "Gemma Nolen",
    company: "Google",
    image: `${process.env.PUBLIC_URL}/img/client1.png`,  // Correct path for public folder
    stars: 5,
  },
  {
    text: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    name: "Alex Johnson",
    company: "Facebook",
    image: `${process.env.PUBLIC_URL}/img/client2.png`,  // Correct path for public folder
    stars: 4,
  },
  // Add more testimonial objects here
];

// Component to create stars
const Stars = ({ count }) => {
  const starsArray = Array(count).fill(null); // Create an array of length 'count'
  return (
    <div className="stars">
      {starsArray.map((_, index) => (
        <div key={index} className="star"></div>
      ))}
    </div>
  );
};

// Testimonial card component
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="card">
      <p className="card-text">{testimonial.text}</p>

      <div className="client-info">
        <img className="client-image" src={testimonial.image} alt={testimonial.name} />
        <div className="client-info-stars">
          <div className="name-company">
            <p className="client-name">{testimonial.name}</p>
            <p className="company-name">{testimonial.company}</p>
          </div>
          <Stars count={testimonial.stars} />
        </div>
      </div>
    </div>
  );
};

// Main Testimonial section component
const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <div className="cards-section">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
