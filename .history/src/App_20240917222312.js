import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';  // Mengimpor komponen Navbar
import Header from './Components/Header';  // Mengimpor komponen Header
import Logo from './Components/Logo';  // Mengimpor komponen Logo
import Skills from './Components/Skills';  // Mengimpor komponen Skills
function App() {
  return (
    <div className="App">
      <Navbar />  {/* Panggil komponen Navbar */}
      <Header />  {/* Panggil komponen Header */}
      <Logo />  {/* Panggil komponen Logo */}
      <header className="App-header">
        <p>
          Welcome to my React App! {/* Ini hanya contoh konten */}
        </p>
      </header>
    </div>
  );
}

export default App;