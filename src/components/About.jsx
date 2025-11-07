import { motion as Motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const About = () => {
  const controls = useAnimation();
  const aboutRef = useRef(null);

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

  // Motion variants
  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="relative text-white py-16 sm:py-24 md:py-36 overflow-hidden px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "var(--dark-bg)" }}
    >
      {/* Particle background */}
      <Particles
        id="about-particles"
        init={particlesInit}
        className="absolute inset-0 -z-10"
        options={{
          fpsLimit: 60,
          particles: {
            number: { value: 30 },
            color: { value: ["var(--hero-primary)", "var(--hero-mid)", "var(--hero-accent)"] },
            size: { value: { min: 2, max: 4 } },
            move: { enable: true, speed: 0.8, outModes: "out" },
            links: { enable: true, distance: 120, color: "var(--hero-primary)", opacity: 0.4, width: 1 },
          },
        }}
      />

      {/* Background gradient blurs */}
      <div
        className="absolute top-10 left-2 sm:left-0 w-48 sm:w-64 h-48 sm:h-64 rounded-full blur-[100px] opacity-20 -z-10"
        style={{ backgroundImage: "linear-gradient(to right, var(--hero-primary), var(--hero-mid))" }}
      />
      <div
        className="absolute bottom-10 right-2 sm:right-0 w-48 sm:w-64 h-48 sm:h-64 rounded-full blur-[100px] opacity-20 -z-10"
        style={{ backgroundImage: "linear-gradient(to right, var(--hero-accent), var(--hero-primary))" }}
      />

      {/* Content */}
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Image (slide from left) */}
        <Motion.div
          variants={fadeLeft}
          initial="hidden"
          animate={controls}
          whileHover={{ scale: 1.03 }}
          className="flex justify-center md:justify-start relative z-10"
        >
          <img
            src="/img/about-us.png"
            alt="About Me"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl drop-shadow-[0_0_20px_rgba(133,79,238,0.4)] border-2 border-transparent bg-gradient-to-br from-[var(--hero-primary)] to-[var(--hero-accent)] p-1"
          />
        </Motion.div>

        {/* Text (slide from right) */}
        <Motion.div
          variants={fadeRight}
          initial="hidden"
          animate={controls}
          className="text-left mt-8 md:mt-0 relative z-10"
        >
          <p className="text-lg sm:text-xl font-semibold mb-2" style={{ color: "var(--hero-accent)" }}>
            — Who I Am
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
            Let’s <br /> Introduce <br /> About{" "}
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r"
              style={{ backgroundImage: "linear-gradient(to right, var(--hero-primary), var(--hero-accent))" }}
            >
              Myself
            </span>
          </h2>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-300 leading-relaxed">
            I am a <b>Full Stack Developer</b> specializing in creating robust, scalable, and visually compelling web applications. I focus on the MERN stack (MongoDB, Express, React, Node.js) to deliver end-to-end solutions.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed text-sm sm:text-base">
            My commitment lies in writing <b>clean, efficient code</b> and translating complex ideas into pixel-perfect user experiences that exceed client expectations.
          </p>

          <div className="mt-6 sm:mt-8">
            <Motion.a
              whileHover={{ scale: 1.05, boxShadow: `0 0 15px rgba(133, 79, 238, 0.7)` }}
              whileTap={{ scale: 0.95 }}
              href="/img/cv.pdf"
              download="my-cv.pdf"
              className="inline-block rounded-lg px-6 sm:px-8 py-2 sm:py-3 text-white font-semibold text-sm sm:text-lg transition duration-300 shadow-xl bg-gradient-to-r from-[var(--hero-primary)] via-[var(--hero-mid)] to-[var(--hero-accent)]"
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
