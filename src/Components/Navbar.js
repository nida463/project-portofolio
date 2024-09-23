import React from 'react';
import './Navbar.css'; // Mengimpor file CSS untuk Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo di sebelah kiri */}
      <div className="logo">Logo</div>
      
      {/* Menu di sebelah kanan */}
      <div className="menu-items">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
