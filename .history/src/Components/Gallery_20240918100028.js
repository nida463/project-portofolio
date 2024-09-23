import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className="gallery-section">
      {[
        { id: 1, title: 'Gallery Item 1', subtitle: 'Subtitle 1', image: '/img/Image1.png' },
        { id: 2, title: 'Gallery Item 2', subtitle: 'Subtitle 2', image: '/img/Image2.png' },
        { id: 3, title: 'Gallery Item 3', subtitle: 'Subtitle 3', image: '/img/Image3.png' },
        { id: 4, title: 'Gallery Item 4', subtitle: 'Subtitle 4', image: '/img/Image4.png' },
        { id: 5, title: 'Gallery Item 5', subtitle: 'Subtitle 5', image: '/img/Image5.png' },
        { id: 6, title: 'Gallery Item 6', subtitle: 'Subtitle 6', image: '/img/Image6.png' }
      ].map((item) => (
        <div key={item.id} className="gallery-card">
          <img src={item.image} alt={item.title} className="gallery-image" />
          <div className="gallery-text">
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
