import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaBootstrap,
  FaGitAlt,
  FaDatabase,
  FaCloud,
  FaServer,
  FaCogs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiFirebase,
  SiTypescript,
  SiRedux,
  SiNpm,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

const skills = [
  { title: "HTML5", icon: FaHtml5, category: "Frontend", level: 90 },
  { title: "CSS3", icon: FaCss3Alt, category: "Frontend", level: 85 },
  { title: "JavaScript", icon: FaJs, category: "Frontend", level: 80 },
  { title: "React.js", icon: FaReact, category: "Frontend", level: 85 },
  { title: "Next.js", icon: SiNextdotjs, category: "Frontend", level: 70 },
  { title: "TailwindCSS", icon: SiTailwindcss, category: "Frontend", level: 90 },
  { title: "Bootstrap", icon: FaBootstrap, category: "Frontend", level: 75 },
  { title: "Redux Toolkit", icon: SiRedux, category: "Frontend", level: 65 },
  { title: "TypeScript", icon: SiTypescript, category: "Frontend", level: 55 },

  { title: "Node.js", icon: FaNodeJs, category: "Backend", level: 75 },
  { title: "Express.js", icon: SiExpress, category: "Backend", level: 70 },
  { title: "MongoDB", icon: SiMongodb, category: "Backend", level: 80 },
  { title: "Firebase", icon: SiFirebase, category: "Backend", level: 65 },
  { title: "REST API", icon: FaServer, category: "Backend", level: 70 },

  { title: "Git", icon: FaGitAlt, category: "Tools", level: 80 },
  { title: "GitHub", icon: FaGithub, category: "Tools", level: 85 },
  { title: "Vercel", icon: SiVercel, category: "Tools", level: 75 },
  { title: "Netlify", icon: SiNetlify, category: "Tools", level: 70 },
  { title: "NPM", icon: SiNpm, category: "Tools", level: 65 },
  { title: "Figma", icon: FaFigma, category: "Tools", level: 60 },
];

// Theme colors
const HeroPrimaryColor = "#854FEE";
const HeroMidColor = "#4A90E2";
const HeroAccentColor = "#FF4D6D";
const DarkBackground = "#0B0E14";
const DarkCardBackground = "#1C1F26";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const categories = ["Frontend", "Backend", "Tools"];
  const filteredSkills = skills.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      className="py-24 md:py-32 text-white"
      style={{ backgroundColor: DarkBackground }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
            </span>{" "}
            <span className="text-4xl">💡</span>
          </h2>
          <p className="mt-2 text-center text-gray-400 max-w-xl mx-auto mb-12">
            Tools & technologies I use to build modern web apps.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center items-center gap-3 my-10 flex-wrap">
          {categories.map((category, i) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className={`px-6 py-2 cursor-pointer rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "text-white shadow-lg"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700"
              }`}
              style={
                activeCategory === category
                  ? {
                      backgroundImage: `linear-gradient(to right, ${HeroPrimaryColor}, ${HeroMidColor}, ${HeroAccentColor})`,
                    }
                  : {}
              }
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="p-5 rounded-xl border border-gray-800 shadow-lg transition-all duration-300"
                style={{ backgroundColor: DarkCardBackground }}
                whileHover={{
                  borderColor: HeroPrimaryColor,
                  boxShadow: `0 0 15px ${HeroPrimaryColor}`,
                }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className="w-12 h-12 rounded-full p-[3px] flex items-center justify-center"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${HeroPrimaryColor}, ${HeroMidColor})`,
                    }}
                  >
                    <div
                      className="w-full h-full rounded-full flex items-center justify-center p-2"
                      style={{ backgroundColor: DarkCardBackground }}
                    >
                      <Icon className="w-6 h-6" color={HeroPrimaryColor} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-lg">
                      {skill.title}
                    </h3>
                    <p
                      className="text-sm font-medium"
                      style={{ color: HeroMidColor }}
                    >
                      {skill.level}% Proficiency
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-800 rounded-full h-[8px] overflow-hidden mt-4">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{
                      duration: 1,
                      delay: 0.15 + idx * 0.05,
                    }}
                    className="h-full rounded-full"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${HeroPrimaryColor}, ${HeroMidColor}, ${HeroAccentColor})`,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
