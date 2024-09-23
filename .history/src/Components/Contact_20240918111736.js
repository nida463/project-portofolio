import React from 'react';
import './Contact.css';  // Pastikan pathnya sesuai dengan lokasi Contact.css di project Anda

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Lets work together</h2>
      <p className="contact-description">
        This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
      </p>
      <div className="contact-info">
        <img src="/img/contact-info.png" alt="Contact Info" className="contact-image" />
        <form className="contact-form">
          <div className="input-fields">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" />
          </div>
          <button type="submit" className="contact-button">Submit</button>
        </form>
      </div>
      <div className="social-links">
        <img src="/img/discord.png" alt="Discord" />
        <img src="/img/facebook.png" alt="Facebook" />
        <img src="/img/dribble.png" alt="Dribble" />
        <img src="/img/instagram.png" alt="Instagram" />
        <img src="/img/behance.png" alt="Behance" />
      </div>
    </section>
  );
};

export default Contact;
