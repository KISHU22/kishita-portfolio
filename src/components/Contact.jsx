import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const email = "kishitasharma0@gmail.com";

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gray-100 dark:bg-gray-900 transition-all duration-500"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let's Connect
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          I'm open to work opportunities and collaboration.
        </motion.p>

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white break-all">
            {email}
          </span>
          <a
            href={`mailto:${email}`}
            className="px-6 py-2 text-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition duration-300"
          >
            Send Mail
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center gap-8 mt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://github.com/KISHU22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kishita-sharma/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-blue-600 hover:text-blue-800 transition"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
