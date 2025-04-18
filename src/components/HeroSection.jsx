import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import profileImg from '../assets/profile.png';
import { FaFileAlt } from "react-icons/fa";
import resume from "../assets/resume.pdf"

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee]">
      {/* Profile Image */}
      <div className="w-50 h-50 rounded-full overflow-hidden border-[6px] border-white shadow-lg mx-auto group">
         <img
             src={profileImg}
             alt="Kishita Sharma"
             className="w-full h-full object-cover rounded-full transform transition-transform duration-500 group-hover:scale-110"
            />
        </div>

      {/* Typing Effect Name */}
      <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 mb-4">
        <span className="text-orange-500">
          <Typewriter
            words={['< Kishita Sharma />']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-xl sm:text-2xl text-gray-600 mb-6">
        Frontend Developer | React.js | JavaScript
      </p>

      {/* Social Icons */}
      <div className="flex gap-6 justify-center mb-8 text-2xl text-gray-700">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-orange-500 transition" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-orange-500 transition" />
        </a>
        <a href="mailto:kishita@example.com">
          <FaEnvelope className="hover:text-orange-500 transition" />
        </a>
      </div>

      {/* Call to Action */}
      <div className="flex justify-center sm:justify-start">
          <a
             href={resume}
             download
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center gap-2 w-full sm:w-auto px-6 py-3 bg-orange-500 text-white border-2 border-orange-500 rounded-lg transition duration-300 hover:bg-white hover:text-orange-500 font-semibold"
             >
             <FaFileAlt className="text-lg" />
             View Resume
           </a>
       </div>

    </section>
  );
};

export default HeroSection;

