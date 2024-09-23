import React from 'react';
import './Logo.css';  // Mengimpor CSS untuk styling

const Logo = () => {
  return (
    <div className="logo-bar">
      <div className="logo">
        <img src="/img/Google.png" alt="Google Logo" />
      </div>
      <div className="logo">
        <img src="/img/Nike.png" alt="Nike Logo" />
      </div>
      <div className="logo">
        <img src="/img/Samsung.png" alt="Samsung Logo" />
      </div>
      <div className="logo">
        <img src="/img/Apple.png" alt="Apple Logo" />
      </div>
      <div className="logo">
        <img src="/img/Adidas.png" alt="Adidas Logo" />
      </div>
    </div>
  );
};

export default Logo;
