import React from 'react'
import Img1 from "../assets/anime.jpg"
import ani from "../assets/hob.mp4";

const Hobby = () => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center min-h-screen relative"
        id="hobby"
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z--2"
          src={ani}
        />
           {/* Overlay Content */}
      <div className="relative z-10 w-full max-w-6xl px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-20 bg-clip-text text-transparent bg-black ">
          My Hobbies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Hobby 1: Drawing Anime */}
          <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6 shadow-lg text-black">
            <img src={Img1} alt="Anime Drawing" className="rounded-md mb-4 w-1/2 h-48 object-cover" />
            <h3 className="text-2xl font-semibold mb-2 text-red-700">Drawing Anime</h3>
            <p>
              I love drawing anime-style illustrations during my free time. It allows me to explore characters, colors, and imaginative worlds.
            </p>
          </div>

          {/* Hobby 2: Writing Tamil Poems */}
          <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6 shadow-lg text-black">
            <h3 className="text-2xl font-semibold mb-2 text-pink-700">Writing Tamil Poems</h3>
            <p className="mb-2">
              Expressing thoughts through Tamil poetry brings me inner peace. Here's a short piece I wrote:
            </p>
            <p className="italic text-gray-800 mt-4">
              "காத்திருந்த உனக்கு காதல் கவிதை ஒன்றை 
               என் கண்களால் எழுதுகிறேன்..."
            </p>
          </div>
        </div>
      </div>
        
          
           
            
          
          
        
      </div>
    </>
  )
}

export default Hobby