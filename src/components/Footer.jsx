import { useRef, useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";

const HeroPrimaryColor = "#A178FF"; // Softer Purple
const HeroAccentColor = "#FF4D6D"; // Pink
const HeroMidColor = "#4A90E2"; // Blue
const DarkBackground = "#0B0E14";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

const Footer = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [controls]);

  const sectionVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const socialContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const socialVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.footer
      ref={sectionRef}
      className="bg-[#0B0E14] text-gray-400 py-16 border-t border-gray-800"
      initial="hidden"
      animate={controls}
      variants={sectionVariant}
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        {/* Logo / Brand */}
        <motion.div
          variants={sectionVariant}
          className="md:col-span-2 lg:col-span-1 flex flex-col items-start"
        >
          <a href="/" className="text-4xl font-extrabold cursor-pointer">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#854FEE] via-[#4A90E2] to-[#FF4D6D] transition duration-300 hover:opacity-80">
              NAKIB.
            </span>
          </a>

          <p className="text-gray-400 text-sm mt-2 max-w-xs leading-relaxed">
            A Full Stack Developer specializing in MERN stack, delivering
            pixel-perfect and scalable web applications.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={sectionVariant}>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            {navLinks.map((link, i) => (
              <motion.li key={i} whileHover={{ x: 5 }}>
                <a
                  href={link.path}
                  className="relative hover:text-[#A178FF] transition-colors duration-300 before:content-[''] before:absolute before:w-1 before:h-1 before:rounded-full before:bg-[#A178FF] before:-left-3 before:top-1/2 before:-translate-y-1/2 before:opacity-0 hover:before:opacity-100"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Core Tech */}
        <motion.div variants={sectionVariant}>
          <h3 className="text-xl font-bold text-white mb-4">Core Tech</h3>
          <ul className="space-y-2 text-gray-400">
            {["React / Next.js", "Express.js", "MongoDB", "Tailwind CSS"].map(
              (tech, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <span style={{ color: HeroMidColor }}>&raquo;</span> {tech}
                </li>
              )
            )}
          </ul>
        </motion.div>

        {/* Social & Copyright */}
        <motion.div variants={sectionVariant}>
          <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
          <motion.div
            className="flex gap-4 mb-8"
            variants={socialContainer}
            initial="hidden"
            animate={visible ? "visible" : "hidden"}
          >
            {[
              {
                Icon: FaLinkedinIn,
                href: "https://linkedin.com/in/ahmed-nakib",
              },
              { Icon: FaGithub, href: "https://github.com/Ahmed-Nakib" },
              { Icon: FaTwitter, href: "https://twitter.com/" },
              { Icon: FaFacebookF, href: "https://facebook.com/" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={socialVariant}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  background: `linear-gradient(135deg, ${HeroPrimaryColor}, ${HeroMidColor}, ${HeroAccentColor})`,
                }}
                className="p-3 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300"
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

      <div className="max-w-6xl mx-auto mt-12 border-t border-gray-800 pt-6 text-center">
        <p className="text-sm text-gray-500">
          Designed with <span style={{ color: HeroAccentColor }}>❤️</span> by
          Ahmed Nakib
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
