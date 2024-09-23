import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2 className="latest-work">Latest work</h2> {/* Judul di atas gallery */}
      <div className="gallery-section">
        {[
          { id: 1, title: 'Project title ', subtitle: 'UI, Art Direction', image: '/img/Image1.png' },
          { id: 2, title: 'Project title ', subtitle: 'UI, Art Direction', image: '/img/Image2.png' },
          { id: 3, title: 'Project title ', subtitle: 'UI, Art Direction', image: '/img/Image3.png' },
          { id: 4, title: 'Project title ', subtitle: 'UI, Art Direction', image: '/img/Image4.png' },
          { id: 5, title: 'Project title ', subtitle: 'UI, Art Direction', image: '/img/Image5.png' },
          { id: 6, title: 'Project title ', subtitle: 'UI, Art Direction', image: '/img/Image6.png' }
        ].map((item) => (
          <div key={item.id} className="gallery-card">
            <img src={item.image} alt={item.title} className="gallery-image" />
            <div className="gallery-text">
              <h3>{item.title}</h3> {/* Title per card */}
              <p>{item.subtitle}</p> {/* Subtitle per card */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
