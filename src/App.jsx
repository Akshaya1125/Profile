import { useState } from 'react';

import './App.css';

import Hero from './Components/Hero.jsx'
import Navbar from './Components/Navbar.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'
import Project from './Components/Project.jsx'
import Hobby from './Components/Hobby.jsx';
function App(){
  return (
    
    <div>
      
      
      <Navbar />
      <Hero />
      <About />
      
      <Project/>
      <Hobby />
      <Contact />
      <Footer />
    </div>
      
  )
};


export default App;
