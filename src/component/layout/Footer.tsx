import { useRef, useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom"; // Use react-router-dom Link for navigation

// Color Constants for theme consistency (extracted from Hero/Header)
const HeroPrimaryColor = "#854FEE"; // Purple
const HeroAccentColor = "#FF4D6D"; // Pink/Red
const HeroMidColor = "#4A90E2"; // Blue
const DarkBackground = "#0B0E14";
const DarkCardBackground = "#1C1F26"; // Used for contrast elements

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

const Footer = () => {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          controls.start("visible");
        }
      },
      // Lower threshold for footers
      { threshold: 0.1 } 
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [controls]);

  // Variants
  const sectionVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const socialContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const socialVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.footer
      ref={sectionRef}
      // Apply the consistent dark background
      className={`bg-[${DarkBackground}] text-gray-400 py-16 border-t border-gray-800`}
      initial="hidden"
      animate={controls}
      variants={sectionVariant}
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        
        {/* 1️⃣ Logo/Brand Section (Used NAKIB. instead of NakibVpn for portfolio consistency) */}
        <motion.div 
            variants={sectionVariant}
            className="md:col-span-2 lg:col-span-1"
        >
            <Link to="/" className="text-3xl font-extrabold mb-4 inline-block">
                {/* Gradient Logo Text matching the Header/Hero */}
                <span className={`bg-clip-text text-transparent bg-gradient-to-r from-[${HeroPrimaryColor}] to-[${HeroAccentColor}]`}>
                    NAKIB.
                </span>
            </Link>
          
          <p className="text-gray-400 text-sm mt-2">
            A Full Stack Developer specializing in MERN stack, delivering pixel-perfect and scalable web applications.
          </p>
        </motion.div>

        {/* 2️⃣ Quick Links (Updated to use Link and matching hover styles) */}
        <motion.div variants={sectionVariant}>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            {navLinks.map((link, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 5 }}
              >
                <Link
                    to={link.path}
                    className={`hover:text-[${HeroPrimaryColor}] transition-colors duration-300 relative before:content-[''] before:absolute before:w-1 before:h-1 before:rounded-full before:bg-[${HeroPrimaryColor}] before:-left-3 before:top-1/2 before:-translate-y-1/2 before:opacity-0 hover:before:opacity-100`}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* 3️⃣ Core Tech (Added this section for portfolio context) */}
        <motion.div variants={sectionVariant}>
            <h3 className="text-xl font-bold text-white mb-4">Core Tech</h3>
            <ul className="space-y-2 text-gray-400">
                {["React / Next.js", "Express.js", "MongoDB", "Tailwind CSS"].map((tech, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                        <span className={`text-[${HeroMidColor}]`}>&raquo;</span> {tech}
                    </li>
                ))}
            </ul>
        </motion.div>


        {/* 4️⃣ Social & Copyright (Updated social icons with tri-color gradient) */}
        <motion.div variants={sectionVariant}>
          <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
          
          {/* Social Icons with floating + gradient hover */}
          <motion.div
            className="flex gap-4 mb-8"
            variants={socialContainer}
            initial="hidden"
            animate={visible ? "visible" : "hidden"} 
          >
            {[
              { Icon: FaLinkedinIn, href: "#" }, 
              { Icon: FaGithub, href: "#" },
              { Icon: FaTwitter, href: "#" }, 
              { Icon: FaFacebookF, href: "#" },
              
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={socialVariant}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                // Use dynamic tri-color gradient for background and subtle purple glow on hover
                className={`p-3 rounded-full text-white transition-all duration-300 bg-gradient-to-tr from-[${HeroPrimaryColor}] via-[${HeroMidColor}] to-[${HeroAccentColor}] shadow-lg hover:shadow-xl hover:shadow-[${HeroPrimaryColor}]/50`}
              >
                <item.Icon size={16} />
              </motion.a>
            ))}
          </motion.div>

          <motion.p variants={sectionVariant} className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ahmed Nakib. 
            <br />
            Built with React & Tailwind.
          </motion.p>
        </motion.div>

      </div>
       {/* Bottom Line Separator and Credit */}
       <div className="max-w-6xl mx-auto mt-12 border-t border-gray-800 pt-6 text-center">
            <p className={`text-sm text-gray-500`}>
                Designed with <span className={`text-[${HeroAccentColor}]`}>❤️</span> by Ahmed Nakib
            </p>
       </div>
    </motion.footer>
  );
};

export default Footer;