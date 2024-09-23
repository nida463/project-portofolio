// src/components/Contact.js
import React from 'react';
import './Contact.css'; // Import CSS untuk Contact

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Lets work together</h2>
      <div className="contact-content">
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <button type="submit" className="contact-button">Submit</button>
        </form>
        <div className="social-links">
          <img src="/img/discord.png" alt="Discord" className="social-icon" />
          <img src="/img/facebook.png" alt="Facebook" className="social-icon" />
          <img src="/img/dribble.png" alt="Dribble" className="social-icon" />
          <img src="/img/instagram.png" alt="Instagram" className="social-icon" />
          <img src="/img/behance.png" alt="Behance" className="social-icon" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
