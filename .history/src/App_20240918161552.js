import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';  
import Header from './Components/Header';  
import Logo from './Components/Logo';  
import Skills from './Components/Skills';  
import Gallery from './Components/Gallery';  
import Testimonial from './Components/Testimonial'; // Import testimonial
import Contact from './Components/Contact'; // Pastikan path sesuai dengan lokasi Contact.js

function App() {
  return (
    <div className="App">
      <Navbar />  {/* Panggil komponen Navbar */}
      <Header />  {/* Panggil komponen Header */}
      <Logo />  {/* Panggil komponen Logo */}
      <Skills />  {/* Panggil komponen Skills */}
      <Gallery />  {/* Tambahkan komponen Gallery */}
      <Testimonial /> {/* Tambahkan Testimonial di bawah gallery */}
      <Contact/> {/* Tambahkan Testimonial di bawah gallery */}

      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
