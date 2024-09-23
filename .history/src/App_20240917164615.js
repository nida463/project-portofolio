import React from 'react';
import './App.css';
import Navbar from './components/Navbar';  // Mengimpor komponen Navbar
import Header from './components/Header';  // Mengimpor komponen Header

function App() {
  return (
    <div className="App">
      <Navbar />  {/* Panggil komponen Navbar */}
      <Header />  {/* Panggil komponen Header */}
      <header className="App-header">
        <p>
          Welcome to my React App! {/* Ini hanya contoh konten */}
        </p>
      </header>
    </div>
  );
}

export default App;
