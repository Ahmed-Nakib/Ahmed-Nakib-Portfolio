import { motion as Motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// Color Constants from Hero Section
const HeroPrimaryColor = "#854FEE"; // Purple
const HeroAccentColor = "#FF4D6D"; // Pink/Red
const HeroMidColor = "#4A90E2"; // Blue
const DarkBackground = "#0B0E14";

const About = () => {
  const controls = useAnimation();
  const aboutRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) controls.start("visible");
      },
      { threshold: 0.3 }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, [controls]);

  const fadeVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <section 
      id="about" 
      ref={aboutRef} 
      className={`relative bg-[${DarkBackground}] text-white py-24 md:py-36 overflow-hidden`}
    >
      <Particles
        id="about-particles"
        init={particlesInit}
        className="absolute inset-0 -z-10"
        options={{
          fpsLimit: 60,
          particles: {
            number: { value: 40 }, // Increased particle count slightly for visibility
            // Using the three main Hero colors
            color: { value: [HeroPrimaryColor, HeroMidColor, HeroAccentColor] }, 
            size: { value: { min: 2, max: 4 } },
            move: { enable: true, speed: 0.8, outModes: "out" },
            links: { enable: true, distance: 150, color: HeroPrimaryColor, opacity: 0.4, width: 1 },
          },
        }}
      />
      
      {/* Background Gradient Blur 1 (subtle effect) */}
      <div 
        className={`absolute top-10 left-0 w-64 h-64 bg-gradient-to-r from-[${HeroPrimaryColor}] to-[${HeroMidColor}] rounded-full blur-[100px] opacity-15 -z-10`}
      ></div>
      {/* Background Gradient Blur 2 (subtle effect) */}
      <div 
        className={`absolute bottom-10 right-0 w-64 h-64 bg-gradient-to-r from-[${HeroAccentColor}] to-[${HeroPrimaryColor}] rounded-full blur-[100px] opacity-15 -z-10`}
      ></div>


      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 md:items-center md:gap-16">
        
        {/* About Image */}
        <Motion.div 
          variants={fadeVariant} 
          initial="hidden" 
          animate={controls} 
          whileHover={{ scale: 1.03 }} 
          className="flex justify-center md:justify-start relative z-10"
        >
          <img 
            src="/img/about-us.png" 
            alt="About Me" 
            // Applied shadow/glow matching the Hero image style
            className={`w-full h-auto rounded-xl max-w-md drop-shadow-[0_0_20px_rgba(133,79,238,0.4)] border-2 border-transparent bg-gradient-to-br from-[${HeroPrimaryColor}] to-[${HeroAccentColor}] p-1`}
          />
        </Motion.div>

        {/* Text Content */}
        <Motion.div 
          variants={fadeVariant} 
          initial="hidden" 
          animate={controls} 
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-left mt-12 md:mt-0 relative z-10"
        >
          <p className={`text-xl font-semibold text-[${HeroAccentColor}] mb-2`}>
            — Who I Am
          </p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl leading-snug">
            Let’s <br /> Introduce <br /> About{" "}
            <span className={`bg-clip-text text-transparent bg-gradient-to-r from-[${HeroPrimaryColor}] to-[${HeroAccentColor}]`}>
                Myself
            </span>
          </h2>
          
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            I am a **Full Stack Developer** specializing in creating robust, scalable, and visually compelling web applications. I focus on the MERN stack (MongoDB, Express, React, Node.js) to deliver end-to-end solutions.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed text-base">
            My commitment lies in writing **clean, efficient code** and translating complex ideas into pixel-perfect user experiences that exceed client expectations.
          </p>

          <div className="mt-8">
            <Motion.a
              whileHover={{ scale: 1.05, boxShadow: `0 0 15px rgba(133, 79, 238, 0.7)` }}
              whileTap={{ scale: 0.95 }}
              href="/img/cv.pdf"
              download="my-cv.pdf"
              // Applied the primary gradient button style from Hero
              className={`inline-block rounded-lg px-8 py-3 text-white font-semibold text-lg transition duration-300 shadow-xl bg-gradient-to-r from-[${HeroPrimaryColor}] via-[${HeroMidColor}] to-[${HeroAccentColor}]`}
            >
              Download CV
            </Motion.a>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default About;