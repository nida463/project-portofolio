import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';  
import Header from './Components/Header';  
import Logo from './Components/Logo';  
import Skills from './Components/Skills';  
import Gallery from './Components/Gallery';  
import Testimonial from './Components/Testimonial'; 
import Contact from './Components/Contact'; 

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Header />  
      <Logo />  
      <Skills />  
      <Gallery /> 
      <Testimonial /> {/* Tambahkan Testimonial di bawah gallery */}
      <Contact/> {/* Tambahkan Testimonial di bawah gallery */}

      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
