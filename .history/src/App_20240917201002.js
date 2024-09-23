import React from 'react';
import './App.css';
import Navbar from './components/Navbar';  // Mengimpor komponen Navbar

function App() {
  return (
    <div className="App">
      <Navbar />  {/* Panggil komponen Navbar */}
      <Header />  {/* Panggil komponen Header */}
      <Skills />  {/* Panggil komponen Skills */}
      <LogoBar />  {/* Panggil komponen LogoBar */}
      <header className="App-header">
        <p>
          Welcome to my React App! {/* Ini hanya contoh konten */}
        </p>
      </header>
    </div>
  );
}

export default App;