import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaGithub,
  FaExternalLinkAlt,
  FaTh,
  FaList,
} from "react-icons/fa";
import { HiOutlineCode } from "react-icons/hi";
import { Link } from "react-router-dom"; // Use react-router-dom Link

// Asset Imports (Assuming correct paths)
import project1 from "../../assets/projects/active-club.jpg";
import project2 from "../../assets/projects/food-mockup.jpg";
import project3 from "../../assets/projects/job_nest-mockup.png";
import project4 from "../../assets/projects/green_hub-mockup.png";

// Color Constants from Hero Section
const HeroPrimaryColor = "#854FEE"; // Purple
const HeroAccentColor = "#FF4D6D"; // Pink/Red
const HeroMidColor = "#4A90E2"; // Blue

// Mock data (Kept as is)
const projects = [
  {
    image: project1,
    name: "Active Club",
    description:
      "Active Club is a full-stack sports club management web application that allows users to view and book courts, participate in activities, and stay informed through announcements. Admins can manage courts, bookings, users, and important updates all in one place.",
    live_link: "https://active-club-cb1de.web.app/",
    github_link: "https://github.com/Elora21y/active-club",
    technologies: [
      "React",
      "TailwindCSS",
      "React-router",
      "Express.js",
      "MongoDB",
      "Firebase",
    ],
  },
  {
    image: project2,
    name: "Fresh Alert",
    description:
      "FreshAlert is a food sharing and management platform designed to reduce food waste by helping users post, find, and claim fresh and nearly expired food items.",
    live_link: "https://food-expiry-tracker-2b052.web.app/",
    github_link: "https://github.com/Elora21y/food-expiry-client",
    technologies: [
      "React",
      "TailwindCSS",
      "Vite",
      "Express.js",
      "MongoDB",
      "Firebase",
    ],
  },
  {
    image: project3,
    name: "Job Nest",
    description:
      "JobNest is an innovative and user-friendly website designed to help job seekers explore a wide variety of job opportunities across multiple companies.",
    live_link: "https://jobnest-web.netlify.app/",
    github_link: "https://github.com/Elora21y/job-nest",
    technologies: ["React", "TailwindCSS", "Firebase", "Vite"],
  },
  {
    image: project4,
    name: "Green Hub",
    description:
      "The goal of GreenHub is to connect gardening enthusiasts, promote sustainable green practices, and create a space where people can learn from each other and grow their own mini green world — whether on a rooftop, balcony, or backyard.",
    live_link: "https://green-hub-21ye.netlify.app/",
    github_link: "https://github.com/Elora21y/green-hub",
    technologies: [
      "React",
      "TailwindCSS",
      "Vite",
      "Express.js",
      "MongoDB",
      "Firebase",
    ],
  },
];

const Portfolio = ({ showAll = true }) => {
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div id="projects" className="py-24 md:py-32 bg-[#0B0E14] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Toggle */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            {showAll ? "All" : "Featured"}{" "}
            <span
              className={`bg-clip-text text-transparent bg-gradient-to-r from-[${HeroPrimaryColor}] to-[${HeroAccentColor}]`}
            >
              Projects
            </span>
          </h2>

          {/* View Toggle Buttons */}
          <div className="flex justify-center gap-3 my-8">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode("grid")}
              className={`cursor-pointer px-4 sm:px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                viewMode === "grid"
                  ? `bg-gradient-to-r from-[${HeroPrimaryColor}] to-[${HeroMidColor}] text-white shadow-lg shadow-[${HeroPrimaryColor}]/50`
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700"
              }`}
            >
              <FaTh size={16} />
              Grid View
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode("list")}
              className={`cursor-pointer px-4 sm:px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                viewMode === "list"
                  ? `bg-gradient-to-r from-[${HeroPrimaryColor}] to-[${HeroMidColor}] text-white shadow-lg shadow-[${HeroPrimaryColor}]/50`
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700"
              }`}
            >
              <FaList size={16} />
              List View
            </motion.button>
          </div>
        </div>

        {/* Projects Display */}
        <AnimatePresence mode="wait">
          {viewMode === "grid" ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              viewport={{ amount: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={`grid-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.16 }}
                  className="group relative bg-[#1C1F26] rounded-xl overflow-hidden border border-gray-800 hover:border-[${HeroPrimaryColor}]/70 transition-all duration-400 shadow-xl"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Overlay on hover for all devices (standardized action buttons) */}
                    <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-5">
                      <a
                        href={project.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 rounded-full bg-gray-700 hover:bg-[${HeroPrimaryColor}] transition-colors transform hover:scale-110 shadow-lg`}
                        title="View GitHub"
                      >
                        <FaGithub size={20} className="text-white" />
                      </a>
                      <a
                        href={project.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 rounded-full bg-gradient-to-r from-[${HeroPrimaryColor}] to-[${HeroAccentColor}] transition-colors transform hover:scale-110 shadow-lg`}
                        title="View Live"
                      >
                        <FaExternalLinkAlt size={18} className="text-white" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    <h3
                      className={`text-xl font-semibold text-white group-hover:text-[${HeroPrimaryColor}] transition-colors`}
                    >
                      {project.name}
                    </h3>

                    <p className="text-gray-400 text-sm line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              viewport={{ amount: 0.3 }}
              className="flex flex-col gap-16 md:gap-20"
            >
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={`list-${index}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`flex flex-col md:flex-row ${
                    index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  } gap-8 lg:gap-12 items-center group bg-[#1C1F26] p-6 rounded-xl border border-gray-800 shadow-2xl`}
                >
                  {/* Image Section */}
                  <div className="flex-1 relative w-full">
                    <div className="relative overflow-hidden rounded-xl border border-gray-700 group-hover:border-[${HeroMidColor}] transition-all duration-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-[${HeroPrimaryColor}]/20">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                      />
                      {/* Gradient overlay for visual effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-100" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 space-y-5">
                    {/* Title with icon */}
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center bg-[${HeroPrimaryColor}]/20 border border-[${HeroPrimaryColor}]/50`}
                      >
                        <HiOutlineCode
                          className={`text-[${HeroPrimaryColor}] text-2xl`}
                        />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white">
                        {project.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed text-base">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-sm bg-gray-800 text-gray-300 px-4 py-2 rounded-lg border border-gray-700 hover:border-[${HeroMidColor}] hover:text-[${HeroMidColor}] transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4 flex-wrap">
                      <a
                        href={project.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-6 py-3 rounded-lg border border-[${HeroPrimaryColor}] text-white hover:bg-[${HeroPrimaryColor}]/20 transition duration-300 flex items-center gap-2 font-semibold`}
                      >
                        <FaGithub size={18} />
                        View Code
                      </a>
                      <a
                        href={project.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={`px-6 py-3 bg-gradient-to-r from-[${HeroPrimaryColor}] to-[${HeroAccentColor}] rounded-lg font-semibold text-white hover:brightness-125 transition duration-300 shadow-lg flex items-center gap-2`}
                      >
                        View Live
                        <motion.div
                          animate={{
                            x: hoveredIndex === index ? 5 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <FaArrowRight size={16} />
                        </motion.div>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* View All Projects Button */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.4 }}
            className="flex justify-center mt-16"
          >
            {/* The Link should probably use 'react-router-dom' Link component */}
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 bg-gradient-to-r from-[${HeroPrimaryColor}] via-[${HeroMidColor}] to-[${HeroAccentColor}] rounded-xl font-bold text-white shadow-xl shadow-[${HeroPrimaryColor}]/40 transition-all duration-300 flex items-center gap-3`}
              >
                View All Projects
                <FaArrowRight size={18} />
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
