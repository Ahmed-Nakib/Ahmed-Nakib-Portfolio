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
import { Link } from "react-router-dom";

// Color Constants
const HeroPrimaryColor = "#854FEE";
const HeroAccentColor = "#FF4D6D";
const HeroMidColor = "#4A90E2";

// Mock Project Data (public folder থেকে images use করা হচ্ছে)
const projects = [
  {
    image: "/food-mockup.png",
    name: "Active Club",
    description:
      "Active Club is a full-stack sports club management web application that allows users to view and book courts, participate in activities, and stay informed through announcements. Admins can manage courts, bookings, users, and important updates all in one place.",
    live_link: "https://agency-website-with-react-js.vercel.app/",
    github_link: "https://agency-website-with-react-js.vercel.app/",
    technologies: ["React", "TailwindCSS", "React-router", "Express.js", "MongoDB", "Firebase"],
  },
  {
    image: "/nakibVpn.png",
    name: "NakibVpn",
    description:
      "NakibVpn is a VPN service that provides secure and private internet access to users, helping them bypass geo-restrictions and protect their online privacy.",
    live_link: "https://nakib-vpn-react.vercel.app/",
    github_link: "https://github.com/Ahmed-Nakib/Nakib-vpn-react",
    technologies: ["React", "TailwindCSS", "FramerMotion", "Vite"],
  },
  {
    image: "/green_hub-mockup.png",
    name: "Job Nest",
    description:
      "JobNest is an innovative and user-friendly website designed to help job seekers explore a wide variety of job opportunities across multiple companies.",
    live_link: "https://agency-website-with-react-js.vercel.app/",
    github_link: "https://agency-website-with-react-js.vercel.app/",
    technologies: ["React", "TailwindCSS", "Firebase", "Vite"],
  },
  {
    image: "/eShop.png",
    name: "E-Shop",
    description:
      "The goal of E-Shop is to connect gardening enthusiasts, promote sustainable green practices, and create a space where people can learn from each other and grow their own mini green world — whether on a rooftop, balcony, or backyard.",
    live_link: "https://e-shop-wrjk.vercel.app/",
    github_link: "https://github.com/Ahmed-Nakib/e-shop",
    technologies: ["React", "TailwindCSS", "Redux", "Vite", "Express.js", "MongoDB", "Firebase"],
  },
];

const Portfolio = ({ showAll = true }) => {
  const [viewMode, setViewMode] = useState("grid");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div id="projects" className="py-24 md:py-32 bg-[#0B0E14] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            {showAll ? "All" : "Featured"}{" "}
            <span className={`bg-clip-text text-transparent bg-gradient-to-r from-[${HeroPrimaryColor}] to-[${HeroAccentColor}]`}>
              Projects
            </span>
          </h2>

          {/* View Toggle */}
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
              <FaTh size={16} /> Grid View
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
              <FaList size={16} /> List View
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.16 }}
                  className="group relative bg-[#1C1F26] rounded-xl overflow-hidden border border-gray-800 hover:border-[#854FEE]/70 transition-all duration-400 shadow-xl"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-5">
                      <a
                        href={project.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-full bg-gray-700 hover:bg-[#854FEE] transition-colors transform hover:scale-110 shadow-lg"
                        title="View GitHub"
                      >
                        <FaGithub size={20} className="text-white" />
                      </a>
                      <a
                        href={project.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-full bg-gradient-to-r from-[#854FEE] to-[#FF4D6D] transition-colors transform hover:scale-110 shadow-lg"
                        title="View Live"
                      >
                        <FaExternalLinkAlt size={18} className="text-white" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#854FEE] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-xs bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full border border-gray-700">
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
              className="flex flex-col gap-16 md:gap-20"
            >
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={index}
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
                    <div className="relative overflow-hidden rounded-xl border border-gray-700 group-hover:border-[#4A90E2] transition-all duration-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-[#854FEE]/20">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-100" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#854FEE]/20 border border-[#854FEE]/50">
                        <HiOutlineCode className="text-[#854FEE] text-2xl" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white">{project.name}</h3>
                    </div>

                    <p className="text-gray-400 leading-relaxed text-base">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-sm bg-gray-800 text-gray-300 px-4 py-2 rounded-lg border border-gray-700 hover:border-[#4A90E2] hover:text-[#4A90E2] transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4 flex-wrap">
                      <a
                        href={project.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-lg border border-[#854FEE] text-white hover:bg-[#854FEE]/20 transition duration-300 flex items-center gap-2 font-semibold"
                      >
                        <FaGithub size={18} /> View Code
                      </a>
                      <a
                        href={project.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="px-6 py-3 bg-gradient-to-r from-[#854FEE] to-[#FF4D6D] rounded-lg font-semibold text-white hover:brightness-125 transition duration-300 shadow-lg flex items-center gap-2"
                      >
                        View Live
                        <motion.div animate={{ x: hoveredIndex === index ? 5 : 0 }} transition={{ duration: 0.2 }}>
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

        {/* View All Button */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mt-16"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#854FEE] via-[#4A90E2] to-[#FF4D6D] rounded-xl font-bold text-white shadow-xl shadow-[#854FEE]/40 transition-all duration-300 flex items-center gap-3"
              >
                View All Projects <FaArrowRight size={18} />
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
