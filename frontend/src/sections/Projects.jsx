import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import artStoreImg from "../assets/art-store.png";
import bookStoreImg from "../assets/book-store.png";

const projects = [
  {
    name: "Online Art Store",
    description: "A comprehensive MERN stack marketplace for artists and art collectors to browse, buy, and sell original artwork seamlessly.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    color: "bg-teal-50",
    image: artStoreImg,
    githubUrl: "https://github.com/aayush-codes123/Online-Artstore   ",
  },
  {
    name: "Online Book Store",
    description: "A MERN stack e-commerce platform allowing bookstore owners to list, manage inventory, and sell their books directly to readers online.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    color: "bg-indigo-50",
    image: bookStoreImg,
    githubUrl: "https://github.com/aayush-codes123/Book-Store",
  },
];

const ProjectCard = ({ index, name, description, tags, color, image, githubUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
        <div className={`${color} rounded-[2rem] overflow-hidden aspect-[4/3] shadow-sm group-hover:shadow-md transition-shadow duration-300 relative`}>
          {/* Project Screenshot */}
          <img
            src={image}
            alt={`${name} Screenshot`}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />

          {/* Overlay Indicator */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-white p-3 rounded-full shadow-lg text-secondary transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <FaGithub size={24} />
            </div>
          </div>
        </div>

        <div className="mt-6 px-2">
          <h3 className="text-xl font-bold text-secondary group-hover:text-accent transition-colors flex items-center gap-2">
            {name}
            <FaExternalLinkAlt size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </h3>
          <p className="mt-2 text-gray-500 text-sm leading-relaxed">{description}</p>
          <div className="mt-3 flex gap-3">
            {tags.map(tag => (
              <span key={tag} className="text-xs font-semibold text-gray-400 uppercase tracking-wide">#{tag}</span>
            ))}
          </div>
        </div>
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <div className="mb-16">
        <span className="text-accent font-bold tracking-wider uppercase text-sm">Portfolio</span>
        <h2 className={styles.sectionHeadText}>Selected Projects</h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 md:gap-y-16'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
