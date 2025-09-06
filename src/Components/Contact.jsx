import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
import ani from "../assets/contact.mp4";

const Contact = () => {
  return (
    <div className='text-black text-center py-16 min-h-screen relative' id="contact">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={ani}
      />
      {/* Optional overlay for readability */}
      <div className="relative z-10 container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development projects or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
              <FaEnvelope className='inline-block text-green-400 mr-2' />
              <a href="mailto:youremail@example.com" className='hover:underline'>
                005akshaya@gmail.com
              </a>
            </div>
            <div className='mb-4'>
              <FaPhone className='inline-block text-green-400 mr-2' />
              <span>+91 7418024012</span>
            </div>
            <div className='mb-4'>
              <FaMapMarkedAlt className='inline-block text-green-400 mr-2' />
              <span>Villupuram, TamilNadu</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form className='space-y-4'>
              <div>
                <label htmlFor="name" className='block mb-2'>Your Name</label>
                <input type="text"
                  className='relative z-20 w-full max-w-4xl mx-auto border-4 border-white rounded-3xl bg-white bg-opacity-30 backdrop-blur-md p-10'
                  placeholder='Enter Your Name' />
              </div>
              <div>
                <label htmlFor="email" className='block mb-2'>Email</label>
                <input type="text"
                  className='relative z-20 w-full max-w-4xl mx-auto border-4 border-white rounded-3xl bg-white bg-opacity-30 backdrop-blur-md p-10'
                  placeholder='Enter Your Email' />
              </div>
              <div>
                <label htmlFor="message" className='block mb-2'>Message</label>
                <textarea
                  className='relative z-20 w-full max-w-4xl mx-auto border-4 border-blue rounded-2xl bg-white bg-opacity-30 backdrop-blur-md p-10'
                  rows="5"
                  placeholder='Enter Your Message' />
              </div>
              <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact