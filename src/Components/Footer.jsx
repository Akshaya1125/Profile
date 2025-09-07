import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='text-black text-center py-16'style={{ backgroundColor: '#E6E6FA' }}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Akshaya</h3>
            <p className="text-gray-400">
              Full-Stack Developer, specializing in web and
              software development.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
                py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Akshaya. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a
              href="https://facebook.com/yourprofile" // <-- Replace with your Facebook profile URL
              className="text-gray-400 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/akshaya-k-3253bb246/" // <-- Replace with your LinkedIn profile URL
              className="text-gray-400 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Akshaya1125" // <-- Replace with your GitHub profile URL
              className="text-gray-400 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-500 ">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 ">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer