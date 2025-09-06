import React from 'react';

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior:'smooth',block:'center' ,inline:'center'});
    }
  };

  return (
    <nav className='bg-black text-white px-8 md:px-10 lg:px-24 fixed top-0 left-0 right-0 z-30'>
      <div className='container py-2 flex justify-between items-center'>
        
        <div className='space-x-6'>
          <button onClick={() => scrollToSection('home')} className='hover:text-gray-400'>Home</button>
          <button onClick={() => scrollToSection('about')} className='hover:text-gray-400'>About Me</button>
          <button onClick={() => scrollToSection('project')} className='hover:text-gray-400'>My Projects</button>
          <button onClick={() => scrollToSection('hobby')} className='hover:text-gray-400'>Hobbies</button>
          <button onClick={() => scrollToSection('contact')} className='hover:text-gray-400'>Contact</button>
          
        </div>
        <button onClick={() => scrollToSection('contact')} className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          Get in Touch
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
