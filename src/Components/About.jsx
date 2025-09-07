import React from "react";
import DSC00182 from "../assets/DSC00182.jpg";
import newbg from "../assets/newbg.mp4";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen relative py-16"
      id="about"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={newbg}
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Main Content (2 Columns) */}
      <div className="relative z-20 w-full max-w-6xl mx-auto rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-10 grid md:grid-cols-2 gap-12">
        
        {/* Left Column - Profile + About Me */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={DSC00182}
            alt="Profile"
            className="w-44 h-44 rounded-full object-cover mb-6 border-4 border-white/80 shadow-lg"
          />
          <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-100">
            Hello! I’m{" "}
            <span className="font-semibold text-blue-300">Akshaya</span>, a{" "}
            <span className="font-semibold">Full-Stack Developer</span> and{" "}
            <span className="font-semibold">AI & ML enthusiast</span> currently
            pursuing my B.Tech in Artificial Intelligence and Machine Learning.{" "}
            <br /><br />
            I have hands-on experience with{" "}
            <span className="font-semibold">
              React, Python, SQL, C, HTML, CSS, and JavaScript
            </span>. I’ve applied these skills in{" "}
            <span className="font-semibold">internships, hackathons, and research projects</span>, 
            where I built real-world applications such as a{" "}
            <span className="font-semibold">Heart Disease Prediction model</span>,{" "}
            <span className="font-semibold">SAR Image Colorization</span> using
            Deep Learning, and an{" "}
            <span className="font-semibold">Enterprise Chatbot</span> with RAG
            and Ollama LLM.
          </p>
        </div>

        {/* Right Column - Skills, Experience, Tools, Stats */}
        <div>
          {/* Skills */}
          <h3 className="text-2xl font-semibold mb-6 text-white text-center md:text-left">
            Skills
          </h3>
          <div className="space-y-5 mb-10">
            {[
              { label: "HTML & CSS", score: 4 },
              { label: "Java", score: 3 },
              { label: "React JS", score: 3.5 },
              { label: "C", score: 4 },
              { label: "Python", score: 3 },
              { label: "SQL", score: 4 },
            ].map((skill) => (
              <div
                className="flex items-center justify-between px-4 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-md"
                key={skill.label}
              >
                <span className="font-semibold text-lg text-white">{skill.label}</span>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <div
                      key={n}
                      className={`w-4 h-4 mx-1 rounded-full ${
                        n <= skill.score
                          ? "bg-gradient-to-r from-green-400 to-blue-500"
                          : "bg-gray-400/40"
                      }`}
                    ></div>
                  ))}
                  <span className="ml-2 text-gray-200">{skill.score}/5</span>
                </div>
              </div>
            ))}
          </div>

          {/* Experience */}
          <h3 className="text-2xl font-semibold mb-6 text-white text-center md:text-left">
            Experience/Interships
          </h3>
          <div className="space-y-4 text-gray-200">
            <p>
              <span className="font-bold text-blue-300">Web Developer: </span>{" "}
                Built responsive web pages using HTML5,
 CSS3, and JavaScript during a web development internship.   
            </p>
            <p>
              <span className="font-bold text-blue-300">Frontend Developer : </span>{" "}
              Contributed to UI development for internal web apps, 
improving responsiveness and user experience.
            </p>
            
          </div>

          {/* Tools */}
          <h3 className="text-2xl font-semibold mt-10 mb-6 text-white text-center md:text-left">
            Tools & Environment
          </h3>
          <div className="flex flex-wrap gap-3">
            {["VS Code", "Git & GitHub", "MySQL", "Flask", "Streamlit", "Google Colab","IntelliJ"].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg shadow text-gray-200 text-sm"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-10 flex justify-around text-center">
            <div>
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                0
              </h3>
              <p className="text-gray-200">Work Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                5+
              </h3>
              <p className="text-gray-200">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
