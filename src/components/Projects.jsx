import React from "react";
import TastyBurgerImg from "../assets/tastyburger.png";
import SkyVibeImg from "../assets/skyvibeweather.png";

const projects = [
  {
    title: "Tasty Burger",
    description: "Burger Food Delivery website App",
    technologies: ["ReactJS", "JavaScript", "Bootstrap"],
    gitLink: "https://github.com/KISHU22/TastyBurger",
    liveLink: "https://tasty-burger-fawn.vercel.app/",
    image: TastyBurgerImg,
  },
  {
    title: "Sky Vibe Weather App",
    description: "Create Temperature viewer in ReactJS, Rest-API.",
    technologies: ["HTML", "CSS", "JavaScript"],
    gitLink: "https://github.com/KISHU22/Weatherapp",
    liveLink: "https://skyvibeweather.netlify.app/",
    image: SkyVibeImg,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 dark:bg-gray-900 py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Projects
      </h2>
      <div className="space-y-16 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-1/2 rounded-lg transition-transform duration-300 hover:scale-105"
            />
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 my-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 my-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="space-x-4 mt-4">
                <a
                  href={project.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                >
                  GitHub
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
