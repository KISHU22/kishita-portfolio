import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaBootstrap, FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "ReactJS", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-black" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6 bg-white dark:bg-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center animate-fadeIn opacity-0 animation-delay"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-5xl mb-2">{skill.icon}</div>
            <p className="text-sm font-semibold text-gray-700 dark:text-white">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;