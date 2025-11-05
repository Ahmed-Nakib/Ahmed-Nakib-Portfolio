import { useState } from "react";
import { motion } from "framer-motion";

// Skill icons (Assuming these paths are correct in your project structure)
import html from "../../assets/skills/html-icon.png";
import css from "../..//assets/skills/css-icon.png";
import js from "../../assets/skills/css-icon.png"; // Note: This uses css-icon.png for js. Consider updating the import path if a JS icon exists.
import react from "../../assets/skills/react-icon.png";
import daisyui from "../../assets/skills/daisyui-icon.png";
import tailwind from "../../assets/skills/tailwind-icon.png";
import mongodb from "../../assets/skills/mongodb-icon.png";
import express from "../../assets/skills/express.js-icon.png";
import nodejs from "../../assets/skills/nodejs-icon.png";
import github from "../../assets/skills/github-icon.png";
import figma from "../../assets/skills/figma-icon.png";
import firebase from "../../assets/skills/firebase-icon.png";
import next from "../../assets/skills/nextjs-icon.png";


const skills = [
  { title: "HTML5", icon: html, category: "Frontend", level: 85 },
  { title: "CSS3", icon: css, category: "Frontend", level: 75 },
  { title: "JavaScript", icon: js, category: "Frontend", level: 50 },
  { title: "React.js", icon: react, category: "Frontend", level: 60 },
  { title: "TailwindCSS", icon: tailwind, category: "Frontend", level: 80 },
  { title: "DaisyUI", icon: daisyui, category: "Frontend", level: 85 },
  { title: "MongoDB", icon: mongodb, category: "Backend", level: 50 },
  { title: "Express.js", icon: express, category: "Backend", level: 40 },
  { title: "Node.js", icon: nodejs, category: "Backend", level: 35 },
  { title: "Firebase", icon: firebase, category: "Backend", level: 60 },
  { title: "GitHub", icon: github, category: "Tools", level: 55 },
  { title: "Figma", icon: figma, category: "Tools", level: 50 },
  { title: "Next.js", icon: next, category: "Frontend", level: 50 },
];

// Hero Theme Colors and Background
const HeroPrimaryColor = "#854FEE"; // Purple
const HeroMidColor = "#4A90E2"; // Blue
const HeroAccentColor = "#FF4D6D"; // Pink/Red
const DarkBackground = "#0B0E14"; // Deep Dark Background
const DarkCardBackground = "#1C1F26"; // Darker Card Background

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const categories = ["Frontend", "Backend", "Tools"];

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

  return (
    // Set the overall section background to the consistent dark theme color
    <section
      id="skills"
      className={`bg-[${DarkBackground}] py-24 md:py-32 text-white`}
    >
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Title */}
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-4">
              MY{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, ${HeroPrimaryColor}, ${HeroAccentColor})`,
                }}
              >
                SKILLS
              </span>
              <span className="text-4xl text-white"> 💡</span>
            </h2>
            <p className="mt-2 text-center text-gray-400 max-w-xl mx-auto mb-12">
                Technologies and tools I use to bring ideas to life.
            </p>
        </motion.div>


        {/* Category Tabs */}
        <div className="flex justify-center items-center gap-3 my-10 flex-wrap">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`px-6 py-2 cursor-pointer rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? `text-white shadow-lg shadow-[${HeroPrimaryColor}]/50`
                  : `bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700`
              }`}
              style={
                activeCategory === category
                  ? {
                      // Apply the Hero tri-color gradient for the active state
                      backgroundImage: `linear-gradient(to right, ${HeroPrimaryColor}, ${HeroMidColor}, ${HeroAccentColor})`,
                    }
                  : {}
              }
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              // Use the dark card background and enhance hover effects
              className={`bg-[${DarkCardBackground}] p-5 rounded-xl border border-gray-800 transition-all duration-300 shadow-xl hover:border-[${HeroPrimaryColor}] hover:shadow-[0_0_15px_rgba(133,79,238,0.5)]`}
            >
              <div className="flex items-center gap-4 mb-3">
                {/* Icon Container with Gradient Border Effect */}
                <div
                  className={`w-12 h-12 rounded-full p-[3px] flex items-center justify-center border-2 border-transparent bg-clip-border bg-origin-border`}
                  style={{ backgroundImage: `linear-gradient(to right, ${HeroPrimaryColor}, ${HeroMidColor})` }}
                >
                  <div className={`w-full h-full rounded-full bg-[${DarkCardBackground}] flex items-center justify-center p-1.5`}>
                      <img
                        src={skill.icon}
                        alt={skill.title}
                        className="w-full h-full object-contain"
                      />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white text-lg">{skill.title}</h3>
                  <p className={`text-sm font-medium text-[${HeroMidColor}]`}>
                    {skill.level}% Proficiency
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-800 rounded-full h-[8px] overflow-hidden mt-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1.0, delay: 0.2 + index * 0.05 }}
                  className="h-full rounded-full"
                  style={{
                    // Use the tri-color gradient for the progress bar fill
                    backgroundImage: `linear-gradient(to right, ${HeroPrimaryColor}, ${HeroMidColor}, ${HeroAccentColor})`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;