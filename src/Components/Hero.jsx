import React, { useEffect, useState } from "react";
import ani from "../assets/abg.mp4";

const name = "Welcome";
const verticalWords = ["AKSHAYA'S", "PORTFOLIO"];
const explosionText = "WELCOME TO THE MADNESS!";

const Hero = () => {
  const [show, setShow] = useState(false);
  const [wordIdx, setWordIdx] = useState(0);
  const [fade, setFade] = useState(true);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    setTimeout(() => setShow(true), 300);
  }, []);

  // Switch vertical words
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWordIdx((prev) => (prev + 1) % verticalWords.length);
        setFade(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const explosionText = "WELCOME TO THE MADNESS!";

const triggerTypingEffect = () => {
  let i = 0;
  let currentText = ""; // local variable to build string

  const interval = setInterval(() => {
    if (i < explosionText.length) {
      currentText += explosionText[i];
      setTypedText(currentText); // update state
      i++;
    } else {
      clearInterval(interval);
    }
  }, 100);
};




  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden" id="home">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={ani}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Vertical Words */}
      <div className="absolute left-10 top-1/4 z-20 flex flex-col items-center space-y-2">
        {verticalWords[wordIdx].split("").map((char, i) => (
          <span
            key={i}
            className="text-3xl md:text-4xl font-bold text-blue-300 tracking-widest transform transition-all duration-500"
            style={{
              opacity: show && fade ? 1 : 0,
              transform: show && fade ? "translateY(0) scale(1.1)" : "translateY(-60px) scale(0.5)",
              transitionDelay: `${i * 0.1}s`,
            }}
          >
            {char}
          </span>
        ))}
      </div>

      {/* Center Content */}
      <div className="z-20 text-center px-4">
        <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-textGradient mb-4">
          {name.split("").map((char, i) => (
            <span
              key={i}
              style={{
                display: "inline-block",
                animation: show ? `float 2s ease-in-out ${i * 0.05}s infinite alternate` : "none",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        {/* Call-to-action */}
        <div className="inline-block px-8 py-4 mt-4 bg-black/50 rounded-2xl backdrop-blur-md border-2 border-blue-400 hover:border-pink-500 transition-all duration-500">
          <p className="text-lg text-gray-200">Dive into my world of creativity!</p>
          <button
            onClick={triggerTypingEffect}
            className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            Explore Portfolio
          </button>

          {/* Explosion text */}
          <div className="mt-4 text-3xl md:text-4xl font-extrabold text-yellow-400 tracking-widest">
            {typedText.split("").map((char, i) => (
              <span
                key={i}
                className="inline-block animate-bounce"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Arrow */}
      <div
        className={`absolute bottom-10 flex flex-col items-center text-white z-20 transition-all duration-1000 delay-1000 
          ${show ? "opacity-100" : "opacity-0"}`}
      >
        <span className="mb-2 text-sm tracking-widest animate-pulse">SCROLL</span>
        <svg
          width="32"
          height="32"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="animate-bounce"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Keyframes */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            100% { transform: translateY(-12px); }
          }

          @keyframes textGradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }

          .animate-textGradient {
            background-size: 200% 200%;
            animation: textGradient 4s ease infinite;
          }

          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          .animate-bounce {
            animation-name: bounce;
            animation-duration: 0.5s;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
