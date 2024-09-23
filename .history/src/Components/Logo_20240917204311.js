import React from 'react';
import './Logo.css';  // Mengimpor CSS untuk styling

const Logo = () => {
  return (
    <div className="logo-bar">
      {/* Menampilkan logo */}
      <div className="logo">
        <img src="/img/Google-logo.png" alt="Google Logo" />
      </div>
      <div className="logo">
        <img src="/img/nike-logo.png" alt="Nike Logo" />
      </div>
      <div className="logo">
        <img src="/img/samsung-logo.png" alt="Samsung Logo" />
      </div>
      <div className="logo">
        <img src="/img/apple-logo.png" alt="Apple Logo" />
      </div>
      <div className="logo">
        <img src="/img/adidas-logo.png" alt="Adidas Logo" />
      </div>
    </div>
  );
};

export default Logo;
