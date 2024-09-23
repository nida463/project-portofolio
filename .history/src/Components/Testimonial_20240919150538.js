import React from 'react';
import './Testimonial.css';

// Testimonial data
const Testimonial= [
  {
    text: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    name: "Gemma Nolen",
    company: "Google",
    image: "./img/client1.png",
    stars: 5,
  },
  {
    text: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    name: "Alex Johnson",
    company: "Facebook",
    image: "./img/client2.png",
    stars: 4,
  },
  // Add more testimonial objects here
];

// Function to create star elements
function createStars(starCount) {
  const starContainer = document.createElement('div');
  starContainer.classList.add('stars');
  
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    starContainer.appendChild(star);
  }

  return starContainer;
}

// Function to create testimonial cards
function createTestimonialCard(testimonial) {
  const card = document.createElement('div');
  card.classList.add('card');

  // Testimonial text
  const text = document.createElement('p');
  text.classList.add('card-text');
  text.innerText = testimonial.text;
  card.appendChild(text);

  // Client image & info
  const clientInfo = document.createElement('div');
  clientInfo.classList.add('client-info');

  // Client image
  const clientImage = document.createElement('img');
  clientImage.classList.add('client-image');
  clientImage.src = testimonial.image;
  clientImage.alt = testimonial.name;
  clientInfo.appendChild(clientImage);

  // Client info & stars
  const clientInfoStars = document.createElement('div');
  clientInfoStars.classList.add('client-info-stars');

  // Name & Company
  const nameCompany = document.createElement('div');
  nameCompany.classList.add('name-company');

  const clientName = document.createElement('p');
  clientName.classList.add('client-name');
  clientName.innerText = testimonial.name;
  nameCompany.appendChild(clientName);

  const companyName = document.createElement('p');
  companyName.classList.add('company-name');
  companyName.innerText = testimonial.company;
  nameCompany.appendChild(companyName);

  clientInfoStars.appendChild(nameCompany);

  // Add stars
  const stars = createStars(testimonial.stars);
  clientInfoStars.appendChild(stars);

  clientInfo.appendChild(clientInfoStars);

  card.appendChild(clientInfo);

  return card;
}

// Function to render all testimonial cards
function renderTestimonials() {
  const cardsSection = document.querySelector('.cards-section');
  
  testimonials.forEach(testimonial => {
    const card = createTestimonialCard(testimonial);
    cardsSection.appendChild(card);
  });
}

// Call the render function after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  renderTestimonials();
});

DE