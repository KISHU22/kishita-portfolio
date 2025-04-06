import React from "react";
import ProfileImage from "../assets/profile.png"; // Make sure image path is correct

const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <img
          src={ProfileImage}
          alt="Kishita Sharma"
          className="w-60 h-60 rounded-full object-cover border-4 border-orange-500 shadow-lg"
        />
        <div>
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Hi! I'm <span className="font-bold text-orange-500">Kishita Sharma</span>, a passionate Front-End Developer with a knack for creating clean and modern web interfaces. I enjoy transforming ideas into reality using code and love bringing designs to life in the browser.
          </p>
          <ul className="mt-4 text-gray-700 dark:text-gray-300 list-disc list-inside space-y-2">
            <li>👩‍💻 Skilled in ReactJS, JavaScript, Tailwind & more</li>
            <li>🎨 Comfortable with Figma for UI/UX design</li>
            <li>🚀 Currently building cool portfolio & real-world projects</li>
            <li>📚 Always learning and improving every day!</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
