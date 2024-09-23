import React from 'react';
import './Header.css';  // Mengimpor CSS untuk styling

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="title-subtitle">
          <p>Branding | Image making</h1>
        </div>
        <div className="visual-designer">
          <h2>Visual Designer</h2>
        </div>
        <div className="additional-content">
          <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
        </div>
        <button className="header-button">Contact</button>
      </div>
      <div className="header-image">
        <img src="/img/header.png" alt="Header Visual" />
      </div>
    </div>
  );
};

export default Header;
