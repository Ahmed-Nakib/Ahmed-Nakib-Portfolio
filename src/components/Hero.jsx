import React, { useEffect, useRef, useCallback } from "react";
import { ReactTyped } from "react-typed";
import { motion as Motion, useAnimation } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Hero = () => {
  const controls = useAnimation();
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) controls.start("visible");
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, [controls]);

  const fadeVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen flex items-center overflow-hidden px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "var(--dark-bg)" }}
    >
      {/* Particles Background */}
      <Particles
        id="hero-particles"
        init={particlesInit}
        className="absolute inset-0 -z-10"
        options={{
          fpsLimit: 60,
          particles: {
            number: { value: 50 },
            color: { value: ["var(--hero-primary)", "var(--hero-mid)", "var(--hero-accent)"] },
            size: { value: { min: 2, max: 5 } },
            move: { enable: true, speed: 1.5, outModes: "out" },
            links: {
              enable: true,
              distance: 150,
              color: "var(--hero-primary)",
              opacity: 0.4,
              width: 1,
            },
          },
        }}
      />

      {/* Floating Blobs */}
      <div className="absolute top-20 left-4 sm:left-20 w-56 sm:w-72 h-56 sm:h-72 bg-gradient-to-r from-[var(--hero-primary)] via-[var(--hero-mid)] to-[var(--hero-accent)] rounded-full blur-[140px] opacity-30 -z-10 animate-float-slow"></div>
      <div className="absolute bottom-20 right-4 sm:right-20 w-56 sm:w-72 h-56 sm:h-72 bg-gradient-to-r from-[var(--hero-accent)] via-[var(--hero-primary)] to-[var(--hero-mid)] rounded-full blur-[140px] opacity-20 -z-10 animate-float"></div>

      {/* Hero Content */}
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10 items-center w-full">
        {/* Text */}
        <Motion.div variants={fadeVariant} initial="hidden" animate={controls}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            HI, I AM{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--hero-primary)] via-[var(--hero-mid)] to-[var(--hero-accent)]">
              AHMED NAKIB
            </span>
          </h1>

          <p className="mt-3 text-lg sm:text-xl md:text-2xl uppercase text-gray-300 font-semibold">
            <ReactTyped
              strings={["Full Stack Developer", "Frontend Engineer", "Backend Specialist"]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </p>

          <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
            <Motion.a
              whileHover={{ scale: 1.08 }}
              href="#contact"
              className="px-5 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-[var(--hero-primary)] via-[var(--hero-mid)] to-[var(--hero-accent)] rounded-lg font-semibold text-white hover:brightness-125 transition duration-300 shadow-lg text-sm sm:text-base"
            >
              Hire Me
            </Motion.a>

            <Motion.a
              whileHover={{ scale: 1.08 }}
              href="https://drive.google.com/file/d/1RhhZ6vcIOS2QdHwdVdJLvL5iqOgcDYwc/view?usp=sharing"
              download="Ahmed-Nakib-CV.pdf"
              className="px-5 py-3 sm:px-6 sm:py-4 border border-[var(--hero-primary)] rounded-lg text-white hover:bg-gradient-to-r hover:from-[var(--hero-primary)] hover:via-[var(--hero-mid)] hover:to-[var(--hero-accent)] transition duration-300 text-sm sm:text-base"
            >
              Get CV
            </Motion.a>
          </div>
        </Motion.div>

        {/* Hero Image */}
        <Motion.div
          variants={fadeVariant}
          initial="hidden"
          animate={controls}
          whileHover={{ scale: 1.05 }}
          className="flex justify-center mt-8 md:mt-0"
        >
          <img
            src="/img/banner/home-right.png"
            alt="Hero"
            className="w-full max-w-md sm:max-w-lg md:max-w-xl drop-shadow-[0_0_25px_rgba(133,79,238,0.6)] animate-float-slow"
          />
        </Motion.div>
      </div>
    </section>
  );
};

export default Hero;
