import React, { useState } from 'react';

import ani from "../assets/pro.mp4";

const projects = [
  {
    backgroundColor:"black",
    title: "Project 1",
    desc: " Designed and deployed an FAQ chatbot using RAG with LLaMALLMtohandleECSsoftwarequeries, enhancing website user support and response accuracy.",
    link: "https://github.com/Akshaya1125/EP_Chatbot",
    color: "bg-indigo-600 hover:bg-indigo-700"
  },
  {
    title: "Project 2",
    desc: "Description of your second project goes here.",
    link: "https://github.com/yourusername/project2",
    color: "bg-blue-600 hover:bg-blue-700"
  },
  {
    title: "Project 3",
    desc: "Description of your third project goes here.",
    link: "https://github.com/yourusername/project3",
    color: "bg-indigo-600 hover:bg-indigo-700"
  },
  {
    title: "Project 4",
    desc: "Description of your fourth project goes here.",
    link: "https://github.com/yourusername/project4",
    color: "bg-indigo-600 hover:bg-indigo-700"
  },
  {
    title: "Project 5",
    desc: "Description of your fifth project goes here.",
    link: "https://github.com/yourusername/project5",
    color: "bg-indigo-600 hover:bg-indigo-700"
  },
  {
    title: "Project 6",
    desc: "Description of your sixth project goes here.",
    link: "https://github.com/yourusername/project6",
    color: "bg-indigo-600 hover:bg-indigo-700"
  }
];

function Project() {
  const [centerIdx, setCenterIdx] = useState(1);

  const showProjects = () => {
    const total = projects.length;
    const prev = (centerIdx - 1 + total) % total;
    const next = (centerIdx + 1) % total;
    return [prev, centerIdx, next];
  };

  const handleLeft = () => {
    setCenterIdx((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleRight = () => {
    setCenterIdx((prev) => (prev + 1) % projects.length);
  };

  return (
    <div
      className='flex flex-col items-center justify-center min-h-screen relative'
      id='project'
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={ani}
      />
      {/* Projects Heading */}
      <h2 className="text-4xl font-bold text-center mb-12 mt-8 z-10 relative">Projects</h2>
      <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center">
        {/* Left Arrow at far left */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full shadow p-2 hover:bg-gray-200 transition"
          onClick={handleLeft}
          aria-label="Scroll left"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        {/* Carousel */}
        <div className="flex gap-8 justify-center items-center w-full max-w-5xl mx-auto py-8">
          {showProjects().map((idx, i) => (
            <div
              key={idx}
              className={`
                min-w-[350px] bg-white rounded-lg shadow-lg p-10 mx-5 cursor-pointer
                transform transition-transform duration-300
                ${i === 1 ? 'scale-125 z-10' : 'scale-100 opacity-70'}
              `}
              style={{ transition: 'transform 0.3s' }}
            >
              <h3 className="text-xl font-bold mb-10">{projects[idx].title}</h3>
              <p className="text-gray-700">{projects[idx].desc}</p>
              <a
                href={projects[idx].link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block mt-6 px-6 py-2 ${projects[idx].color} text-white rounded transition`}
              >
                View
              </a>
            </div>
          ))}
        </div>
        {/* Right Arrow at far right */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full shadow p-2 hover:bg-gray-200 transition"
          onClick={handleRight}
          aria-label="Scroll right"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
    
}

export default Project;