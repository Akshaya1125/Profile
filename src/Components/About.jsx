import React from 'react'
import DSC00182 from '../assets/DSC00182.jpg'
import aboutme from '../assets/aboutme.jpg'
import ani from "../assets/bg.mp4";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative py-12" id="about">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={ani}
      />
      {/* Centered Box with white border and opacity */}
      <div className="relative z-20 w-full max-w-xl mx-auto border-4 border-white rounded-3xl bg-white bg-opacity-30 backdrop-blur-md p-8">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-col items-center">
          <img
            src={DSC00182}
            alt=""
            className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-white shadow-lg"
          />
          <p className="text-lg mb-8 text-center">
            I am a passionate full-stack developer with a focus on building
            modern and responsive web applications. With a strong foundation
            in both frontend and backend technologies, I strive to create
            seamless and efficient user experiences.
          </p>
          {/* Skills */}
          <div className="space-y-4 mb-8 w-full">
            <div className="flex items-center">
              <span className="w-32 font-semibold">HTML & CSS</span>
              <div className="flex-1 bg-gray-300 rounded-full h-3 mx-4">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full w-11/12"></div>
              </div>
              <span className="ml-2 font-semibold">92%</span>
            </div>
            <div className="flex items-center">
              <span className="w-32 font-semibold">JavaScript</span>
              <div className="flex-1 bg-gray-300 rounded-full h-3 mx-4">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full w-8/12"></div>
              </div>
              <span className="ml-2 font-semibold">67%</span>
            </div>
            <div className="flex items-center">
              <span className="w-32 font-semibold">React JS</span>
              <div className="flex-1 bg-gray-300 rounded-full h-3 mx-4">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full w-11/12"></div>
              </div>
              <span className="ml-2 font-semibold">92%</span>
            </div>
            <div className="flex items-center">
              <span className="w-32 font-semibold">C</span>
              <div className="flex-1 bg-gray-300 rounded-full h-3 mx-4">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full w-10/12"></div>
              </div>
              <span className="ml-2 font-semibold">83%</span>
            </div>
            <div className="flex items-center">
              <span className="w-32 font-semibold">Python</span>
              <div className="flex-1 bg-gray-300 rounded-full h-3 mx-4">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full w-9/12"></div>
              </div>
              <span className="ml-2 font-semibold">75%</span>
            </div>
            <div className="flex items-center">
              <span className="w-32 font-semibold">SQL</span>
              <div className="flex-1 bg-gray-300 rounded-full h-3 mx-4">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full w-11/12"></div>
              </div>
              <span className="ml-2 font-semibold">92%</span>
            </div>
          </div>
          <div className="mt-12 flex justify-between text-center w-full">
            <div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                0
              </h3>
              <p>Years Experience</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                5+
              </h3>
              <p>Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About