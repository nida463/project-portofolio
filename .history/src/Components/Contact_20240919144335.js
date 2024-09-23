import React from 'react';
import './Contact.css'; // Pastikan CSS diimpor

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Let's work together</h2>
      <div className="contact-content">
        {/* Contact Info */}
        <div className="contact-info">
          <p className="contact-description">
            This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
          </p>
          <div className="social-links">
            <img src="/img/discord.png" alt="Discord" className="social-icon" />
            <img src="/img/facebook.png" alt="Facebook" className="social-icon" />
            <img src="/img/dribble.png" alt="Dribble" className="social-icon" />
            <img src="/img/instagram.png" alt="Instagram" className="social-icon" />
            <img src="/img/behance.png" alt="Behance" className="social-icon" />
          </div>
        </div>
        {/* Contact Form */}
        <div className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
          <button className="contact-button" type="submit">Submit</button>
        </div>
      </div>
    </section>
  );/* Client Image & Info */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 16px;

width: 310.67px;
height: 88px;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;


/* Client Image */

width: 50px;
height: 50px;

background: url(.png);

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Client Info & Stars */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 11px;

width: 244.67px;
height: 88px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 1;


/* Stars */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 6px;

width: 124px;
height: 20px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Star */

width: 20px;
height: 20px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* Star */

position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;

/* Black */
background: #2D2D2D;
border-radius: 1px;


/* Star */

width: 20px;
height: 20px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;


/* Star */

position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;

/* Black */
background: #2D2D2D;
border-radius: 1px;


/* Star */

width: 20px;
height: 20px;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;


/* Star */

position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;

/* Black */
background: #2D2D2D;
border-radius: 1px;


/* Star */

width: 20px;
height: 20px;


/* Inside auto layout */
flex: none;
order: 3;
flex-grow: 0;


/* Star */

position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;

/* Black */
background: #2D2D2D;
border-radius: 1px;


/* Star */

width: 20px;
height: 20px;


/* Inside auto layout */
flex: none;
order: 4;
flex-grow: 0;


/* Star */

position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;

/* Black */
background: #2D2D2D;
border-radius: 1px;


/* Name & Company */

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 244.67px;
height: 57px;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;


/* Gemma Nolen */

width: 244.67px;
height: 30px;

/* Subtitle */
font-family: 'Epilogue';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 30px;
/* identical to box height, or 150% */

/* Black */
color: #2D2D2D;


/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;


/* Google */

width: 244.67px;
height: 27px;

/* Body text */
font-family: 'Epilogue';
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 27px;
/* identical to box height, or 159% */

/* Black */
color: #2D2D2D;


/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

};

export default Contact;
