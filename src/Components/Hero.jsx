import React, { useEffect, useState } from 'react'
import ani from "../assets/home.mp4";

const name = "Akshaya Kannabiran's";

const verticalWords = [
  "WELCOME",
  "こんにちは" // "Konichiwa" in Japanese
];

const Hero = () => {
  const [show, setShow] = useState(false);
  const [wordIdx, setWordIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setTimeout(() => setShow(true), 200);
  }, []);

  // Switch between "WELCOME" and "こんにちは" every 2.5 seconds with fade animation
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade out
      setTimeout(() => {
        setWordIdx((prev) => (prev + 1) % verticalWords.length);
        setFade(true); // fade in new word
      }, 400); // duration should match fade-out
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen relative"
      id="home"
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

      {/* Vertical Welcome/Konichiwa Word with fade animation */}
      <div className="absolute left-40 top-25 z-20 flex flex-col items-center">
        {verticalWords[wordIdx].split("").map((char, i) => (
          <span
            key={i}
            className={`text-5xl font-bold text-blue-200 tracking-widest transition-all duration-400`}
            style={{
              opacity: show && fade ? 1 : 0,
              transform: show && fade ? "translateY(0)" : "-20px",
              transition: `all 0.4s ${i * 0.10 + 0.2}s`
            }}
          >
            {char}
          </span>
        ))}
      </div>

      {/* Jumping Name */}
      <h1
        className={`
          absolute right-10 top-80 text-3xl font-bold text-white mb-2 z-10 flex font-extrabold text-transparent bg-clip-text 
          bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 z-10 flex
        `}
        style={{ letterSpacing: "2px" }}
      >
        {name.split("").map((char, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              animation: show
                ? `jump 0.6s ${i * 0.03 + 0.3}s infinite alternate`
                : "none"
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
      <p
        className={`absolute right-10 top-1/2 text-3xl text-blue-200 italic z-10 
          transition-all duration-1000 delay-500 
          ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
        `}
      >
       portfolio
      </p>
     
      <p
        className={`absolute right-10 top-[60%] text-lg text-blue-200 italic z-10 
          transition-all duration-1000 delay-500
          ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
        `}
      >
        Full-Stack Developer | Designer | ML Enthusiast
       
      </p>
      <p
  className={`absolute right-10 top-[85%] text-lg text-white z-10 
    transition-all duration-1000 delay-500
    ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
  `}
>
  Scroll Down to know more about me
  <span className="ml-3 animate-bounce inline-block">
    {/* Down Arrow SVG */}
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"
      viewBox="0 0 24 24" className="inline-block align-middle">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </span>
</p>
      
      {/* Jump keyframes */}
      <style>
        {`
          @keyframes jump {
            0% { transform: translateY(0);}
            50% { transform: translateY(-18px);}
            100% { transform: translateY(0);}
          }
        `}
      </style>
    </div>
  )
}

export default Hero