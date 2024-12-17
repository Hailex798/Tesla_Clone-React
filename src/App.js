import React from 'react';
import './App.css';
import Header from "./components/Header.js";
import Home from "./components/Home.js"
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init({
    duration: 800,
    offset: 50
  });
  
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
